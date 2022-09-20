import { oak, semver } from "../../deps.ts";
import getLatestRelease from "../../services/getLatestRelease.ts";
import { getAssetSignature, testAsset } from "../../services/getPlatform.ts";

type ParamsType = { target: string } & { arch: string } & {
    current_version: string;
} & Record<string | number, string | undefined>;

type TauriUpdateResponse = {
    url: string;
    version: string;
    notes?: string;
    pub_date?: string;
    signature?: string;
};

const handler: oak.RouterMiddleware<
    "/v1/:target/:arch/:current_version",
    ParamsType,
    Record<string, string>
> = async ({ response, params, request }) => {
    const { target, arch, current_version } = params;
    console.log(params);

    if (target && arch && current_version) {
        const latestRelease = await getLatestRelease(request);

        if (latestRelease) {
            const latestVersion = latestRelease.tag_name.split("v").pop();
            const currentVersion = current_version;

            if (latestVersion && semver.valid(latestVersion)) {
                if (currentVersion && semver.valid(currentVersion)) {
                    if (semver.gt(latestVersion, currentVersion)) {
                        // The user has older version, please update
                        const match = latestRelease.assets.find(({ name }) =>
                            testAsset(target as any, arch as any, name)
                        );

                        if (match) {
                            const signature = await getAssetSignature(
                                match.name,
                                latestRelease.assets
                            );

                            if (signature) {
                                const data: TauriUpdateResponse = {
                                    url: match.browser_download_url,
                                    version: latestVersion,
                                    notes: latestRelease.body,
                                    pub_date: latestRelease.published_at,
                                    signature,
                                };

                                response.status = 200;
                                response.type = "application/json";
                                response.body = data;

                                return;
                            }
                        }
                    }
                }
            }
        }
    }

    response.status = 404;
    response.body = "Not found";
};

export default handler;

import { oak, semver } from '../../deps.ts';
import getLatestRelease from '../../services/getLatestRelease.ts';

type ParamsType = { target: string; } & { arch: string; } & { current_version: string; } & Record<string | number, string | undefined>

const handler: oak.RouterMiddleware<"/v1/:target/:arch/:current_version", ParamsType, Record<string, string>> = async ({ response, params, request }) => {
    const { target, arch, current_version } = params;
    
    if (target && arch && current_version) {
        const latestRelease = await getLatestRelease(request);
        
        if (latestRelease) {
            const latestVersion = latestRelease.tag_name.split("v").pop();
            const currentVersion = current_version;

            if (latestVersion && semver.valid(latestVersion)) {
                if (currentVersion && semver.valid(currentVersion)) {
                    if (semver.gt(latestVersion, currentVersion)) { // The user has older version, please update
                        console.log(latestVersion, currentVersion);
                    }
                }
            }
        }
    }

    response.status = 404;
    response.body = "Not found";
}

export default handler;
import {
    ARCH_FILTERS,
    AVAILABLE_ARCHITECTURES,
    AVAILABLE_PLATFORMS,
    PLATFORM_FILTERS,
} from "./constants.ts";
import { Asset } from "./getLatestRelease.ts";

const fileExt = (filename: string): string => filename.split(".").pop() || "";

const testAsset = (
    target: AVAILABLE_PLATFORMS,
    arch: AVAILABLE_ARCHITECTURES,
    fileName: string
): boolean => {
    const { matches, extension } = PLATFORM_FILTERS[target];
    const arch_matches = ARCH_FILTERS[arch];
    const rightArch =
        arch_matches &&
        ARCH_FILTERS[arch].some((arch) => fileName.includes(arch));

    // .app gz files don't have arch in the name
    if (!rightArch && target !== AVAILABLE_PLATFORMS.MacOS) return false;

    if (fileExt(fileName) !== extension) return false;

    return matches.some((match) => fileName.includes(match));
};

const getAssetSignature = async (
    fileName: string,
    assets: Asset[]
): Promise<string | undefined> => {
    const foundSignature = assets.find(
        (asset) => asset.name.toLowerCase() === `${fileName.toLowerCase()}.sig`
    );

    if (!foundSignature) return undefined;

    const response = await fetch(foundSignature.browser_download_url, {
        method: "GET",
    });
    if (response.status !== 200) return undefined;

    return await response.text();
};

export { testAsset, getAssetSignature };

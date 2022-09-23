import readJson from "./readJson.ts";

/**
 * @example
 * ```typescript
 * import writeJson from './service/writeJson.ts';
 * 
 * type PackageSchema = {
 *      version: string;
 * }
 * 
 * const path = "package.json";
 * const data: PackageSchema = {
 *      version: "1.0.32"
 * }
 * 
 * const isSaved = await writeJson<PackageSchema>(path, data, false); // true or false
 * ```
 * 
 * @param path Path of the file.
 * @param data Data witj key-value pair (JSON).
 * @param overwiteFile boolean - set `true` to overwrite whole file and save the data given.
 * @returns boolean - If succeded returns `true` else `false`.
 * 
 * @since 1.0.32
 */
const writeJson = async <T> (path: string, data: T, overwiteFile: boolean): Promise<boolean> => {
    try {
        const jsonData = await readJson<T>(path);

        if (overwiteFile)
            await Deno.writeTextFile(path, JSON.stringify(data, null, 4));

        else
            await Deno.writeTextFile(path, JSON.stringify({ ...jsonData, ...data }, null, 4));
        
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export default writeJson;
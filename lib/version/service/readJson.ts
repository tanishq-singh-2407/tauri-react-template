/**
 * @example
 * ```typescript
 * import readJson from './service/readJson.ts';
 * 
 * type PackageSchema = {
 *      version: string;
 * }
 * 
 * const path = "package.json";
 * 
 * const data = await readJson<PackageSchema>(path);
 * // data: { version: "1.0.32" }
 * ```
 * 
 * @param path Path of the file.
 * @returns JSON - file data
 * 
 * @since 1.0.32
 */

const readJson = async <T>(path: string) => JSON.parse(await Deno.readTextFile(path)) as T;

export default readJson;
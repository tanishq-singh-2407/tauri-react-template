import readJson from "./service/readJson.ts";
import writeJson from "./service/writeJson.ts";
import * as semver from 'https://deno.land/x/semver@v1.4.1/mod.ts';

type PackageSchema = {
    version: string;
}

const path = "./package.json";

const current_version = (await readJson<PackageSchema>(path)).version;
const new_version = semver.inc(current_version, "patch");

console.clear();
console.log(`Repository Version Update!!\n`);
console.log(`Current repo version: ${current_version}`);
const version = prompt(`New version:`, new_version ? new_version : current_version)!;

await writeJson<PackageSchema>(path, { version }, false)
    .then(() => console.log(`New Repo Version ${version}`));
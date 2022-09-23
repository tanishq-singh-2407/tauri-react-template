import readJson from "./service/readJson.ts";
import writeJson from "./service/writeJson.ts";
import * as semver from 'https://deno.land/x/semver@v1.4.1/mod.ts';

type PackageSchema = {
    package: {
        version: string;
    }
}

const json_path = "./src-tauri/tauri.conf.json";
const toml_path = "./src-tauri/Cargo.toml";

const current_json_version = (await readJson<PackageSchema>(json_path)).package.version;
const current_toml_data = await Deno.readTextFile(toml_path);

const new_version = semver.inc(current_json_version, "patch");

console.clear();
console.log(`Application Version Update!!\n`);
console.log(`Current app version: ${current_json_version}`);
const version = prompt(`New version:`, new_version ? new_version : current_json_version)!;

try {
    await writeJson<PackageSchema>(json_path, { package: { version } }, false);
    await Deno.writeTextFile(toml_path, current_toml_data.replace(current_json_version, version));

    console.log(`New App Version ${version}`);
} catch (error) {
    console.error(error);
}

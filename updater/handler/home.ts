import { oak } from "../deps.ts";

const repo =
    "https://api.github.com/repos/tanishq-singh-2301/tauri-react-template/releases/latest";

const handler: oak.RouterMiddleware<
    "/",
    Record<string | number, string | undefined>,
    Record<string, any>
> = async ({ response }) => {
    try {
        const release = await fetch(repo, { method: "GET" });
        const data = await release.json();

        response.status = 200;
        response.type = "application/json";
        response.body = data;
    } catch (_) {
        response.status = 500;
        response.body = "Internal Server Error";
    }
};

export default handler;

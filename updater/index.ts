import { oak } from './deps.ts';

const { Application, Router } = oak;

const port = 5000;
const repo = "https://api.github.com/repos/tanishq-singh-2301/tauri-react-template/releases/latest";
const app = new Application();
const router = new Router();

router.get("/", async ({ response }) => {
    try {
        const release = await fetch(repo, { method: "GET" });
        const data = await release.json();
    
        response.status = 200;
        response.type = "application/json";
        response.body = data
    } catch (_) {
        response.status = 500;
        response.body = "Internal Server Error"
    }
});

router.get("/v1/:target/:arch/:current_version", ({ response, params }) => {
    console.log('params: ', params);

    response.status = 204;
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });
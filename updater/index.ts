import { oak } from './deps.ts';

const { Application, Router } = oak;

const PORT = "3000";
const HOSTNAME = '0.0.0.0';

const app = new Application();
const router = new Router();

router.get("/", ({ response }) => {
    response.body = "Hello World!";
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen(`${HOSTNAME}:${PORT}`);
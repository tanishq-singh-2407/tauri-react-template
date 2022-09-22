import { oak } from "./deps.ts";
import router from "./router/index.ts";

const port = 5000;
const app = new oak.Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });

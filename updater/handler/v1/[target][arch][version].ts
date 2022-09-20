import { oak } from '../../deps.ts';

type ParamsType = { target: string; } & { arch: string; } & { current_version: string; } & Record<string | number, string | undefined>

const handler: oak.RouterMiddleware<"/v1/:target/:arch/:current_version", ParamsType, Record<string, string>> = ({ response, params }) => {
    console.log('params: ', params);

    response.status = 204;
    response.body = null;
}

export default handler;
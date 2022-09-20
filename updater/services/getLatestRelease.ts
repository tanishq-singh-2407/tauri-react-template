import { oak } from '../deps.ts';

export type Asset = { name: string; browser_download_url: string }

type Release = {
  tag_name: string
  assets: Asset[]
  body: string
  published_at: string
}

const repo = "https://api.github.com/repos/tanishq-singh-2301/tauri-react-template/releases/latest";

const getLatestRelease = async (request: oak.Request): Promise<Release | null> => {
    try {
        const release = await fetch(
            repo,
            {
                method: "GET",
                headers: {
                    'Accept': 'application/vnd.github.preview',
                    'User-Agent': request.headers.get('User-Agent') as string
                }
            }
        );
        const data = await release.json() as Release;
        return data;
    } catch (_) {
        return null;
    }
}

export default getLatestRelease;
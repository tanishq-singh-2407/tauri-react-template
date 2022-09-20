import { type } from '@tauri-apps/api/os';
import { useEffect, useState } from 'react';

const WEB_APP: boolean = import.meta.env.VITE_PUBLIC_WEB_APP as string === "true";

const Home = () => {
    const [os, setOs] = useState<string>("");

    useEffect(() => {
        if (WEB_APP)
            setOs("Web");

        else {
            (async () => {
                const osType = await type();
                setOs(osType);
            })();
        }
    }, []);

    return (
        <div className="min-h-visible h-full w-full">
            <main className="h-full w-full flex justify-center items-center">
                <span>{os}</span>
            </main>
        </div>
    );
};

export default Home;
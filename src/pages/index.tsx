import { type } from '@tauri-apps/api/os';
import { useEffect, useState } from 'react';

const Home = () => {
    const TAURI_APP: boolean = import.meta.env.VITE_TAURI_APP as string === "true";
    const [os, setOs] = useState<string>("");

    useEffect(() => {
        if (TAURI_APP) {
            (async () => {
                const osType = await type();
                setOs(osType);
            })();
        }

        else setOs("Web");
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
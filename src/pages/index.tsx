import { type } from '@tauri-apps/api/os';
import { useEffect, useState } from 'react';

const IS_APP: boolean = import.meta.env.VITE_IS_APP as string === "true";

const Home = () => {
    const [os, setOs] = useState<string>("");

    useEffect(() => {
        console.log(IS_APP);

        if (IS_APP)
            (async () => {
                const osType = await type();
                setOs(osType);
            })();

        else
            setOs("Web");
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
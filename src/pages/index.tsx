import Header from "@/components/header";
import Footer from "@/components/footer";
import Movie from "@/components/movie";
import { OsType, type } from '@tauri-apps/api/os';
import { checkUpdate, installUpdate } from '@tauri-apps/api/updater';
import { relaunch } from '@tauri-apps/api/process'
import { useState } from "react";

const Home = (): JSX.Element => {
    const [temp, setTemp] = useState<string>("Check For Update");

    return (
        <div className="h-full w-full flex justify-start items-center flex-col bg-[#f3f2f3]">
            <Header color="text-neutral-600" />

            <main className="flex justify-center items-center h-[calc(100%-8rem)] w-full px-5 relative">
                <Movie />

                <button
                    className="absolute top-1/2 left-10 -translate-y-1/2 z-10"
                    onClick={async () => {
                        try {
                            if (temp.includes("Checking") || temp.includes("Checked")) {
                                setTemp("Check For Update")
                            }

                            else {
                                const os: OsType = await type();
                                setTemp("Checking : ".concat(os));

                                const { shouldUpdate } = await checkUpdate();
                                setTemp("Checked : ".concat(shouldUpdate ? "yes" : "no"))

                                if (shouldUpdate) {
                                    await installUpdate();
                                    await relaunch();
                                }
                            }
                        } catch (_) {
                            if (typeof (_ as any).message === "string") {
                                console.error((_ as any).message);
                                setTemp((_ as any).message)
                            }
                        }
                    }}
                >
                    {temp}
                </button>
            </main>

            <Footer color="text-neutral-700" />
        </div>
    );
};

export default Home;

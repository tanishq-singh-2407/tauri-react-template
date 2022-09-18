import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Joi from "joi";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Player } from "react-videotape";

const videosSchema = Joi.array()
    .items(Joi.string().required())
    .required()
    .min(1);

const Watch = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [videos, setVideos] = useState<string[] | null>(null);

    useEffect(() => {
        const videosInstance = (location.state as any)?.videos;

        const { value } = videosSchema.validate(videosInstance);

        if (value) setVideos(value);
        else return navigate("/", { replace: true });

        // eslint-disable-next-line
    }, []);

    return (
        <div className="h-full w-full flex flex-col justify-center items-center bg-[#181818]">
            <Header color="text-slate-200" />

            <main className="flex flex-col justify-center items-center h-[calc(100%-8rem)] w-full px-5 relative">
                <div className="w-full aspect-video flex justify-center items-center max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
                    {videos && (
                        <Player
                            videos={videos}
                            rate={2}
                            skip={{
                                last: 0,
                                start: 5,
                            }}
                            onError={(err, player) => {
                                if (!err) return;

                                if (
                                    err.code === 4 &&
                                    player.src.includes("blob")
                                )
                                    navigate("/", { replace: true });
                                else alert(err.message);
                            }}
                            onFullScreen={console.log}
                        />
                    )}
                </div>
            </main>

            <Footer color="text-slate-200" />
        </div>
    );
};

export default Watch;

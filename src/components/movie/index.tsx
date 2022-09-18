import { MutableRefObject, useEffect, useRef } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const handleFiles = (
    files: FileList | null | undefined,
    navigate: NavigateFunction
) => {
    const videos: string[] = [];

    if (files) {
        for (let i = 0; i < files.length; i++)
            if (files[i].type.includes("video"))
                videos.push(URL.createObjectURL(files[i]));

        if (videos.length > 0)
            navigate("/watch", {
                replace: true,
                state: {
                    videos,
                },
            });
    }
    return;
};

const handleClick = (ev: MutableRefObject<HTMLInputElement | null>) => {
    if (!ev.current) return;

    ev.current.value = "";
    ev.current.click();
};

export default function Movie() {
    const input = useRef<HTMLInputElement | null>(null);
    const movie = useRef<HTMLInputElement | null>(null);
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (movie.current) {
            movie.current.addEventListener("dragover", (e) =>
                e.preventDefault()
            );
            movie.current.addEventListener("dragenter", (e) =>
                e.preventDefault()
            );
            movie.current.addEventListener("dragleave", (e) =>
                e.preventDefault()
            );
            movie.current.addEventListener("drop", (e) => {
                e.preventDefault();
                handleFiles(e.dataTransfer?.files, navigate);
            });
        }

        if (input.current)
            input.current.addEventListener("change", (e) =>
                handleFiles((e.target as HTMLInputElement).files, navigate)
            );
        // eslint-disable-next-line
    }, []);

    return (
        <div
            className="max-w-[15rem] sm:max-w-xs w-full aspect-square flex justify-center items-center p-px before:rounded-3xl after:rounded-3xl relative duration-300 drag-shadow"
            ref={movie}
        >
            <div
                className="h-full w-full duration-300 z-20 rounded-3xl bg-white cursor-pointer relative flex justify-center items-center"
                onClick={() => handleClick(input)}
            >
                <span className="text-base sm:text-lg font-bold text-neutral-600 tracking-wide">
                    DROP/CLICK HERE
                </span>
                <input
                    type="file"
                    multiple
                    ref={input}
                    className="hidden"
                    accept="video/*"
                />
            </div>
        </div>
    );
}

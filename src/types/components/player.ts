import { MutableRefObject } from "react";

interface handleProps {
    player: MutableRefObject<HTMLVideoElement | null>;
    videos: string[];
    className?: string;
}

export type { handleProps };

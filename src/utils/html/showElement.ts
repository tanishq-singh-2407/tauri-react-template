import { MutableRefObject } from "react";

const showElement = (
    controls: MutableRefObject<HTMLElement | null> | HTMLElement
) => {
    let current = null;

    if (controls instanceof HTMLElement) current = controls;
    else current = controls.current;

    if (!current) return;

    current.style.opacity = "100";
    current.style.cursor = "default";
};

export default showElement;

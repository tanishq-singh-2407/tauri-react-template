import { MutableRefObject } from "react";

const hideElement = (
    controls: MutableRefObject<HTMLElement | null> | HTMLElement
) => {
    let current = null;

    if (controls instanceof HTMLElement) current = controls;
    else current = controls.current;

    if (!current) return;

    current.style.opacity = "0";
    current.style.cursor = "none";
};

export default hideElement;

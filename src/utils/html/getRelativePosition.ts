const getRelativePosition = (
    ev: MouseEvent | TouchEvent,
    ele: HTMLElement
): { x: number; y: number } => {
    const rect = ele.getBoundingClientRect();
    let clientX = 0,
        clientY = 0;

    if (ev instanceof MouseEvent) {
        clientX = ev.clientX;
        clientY = ev.clientY;
    } else if (ev instanceof TouchEvent) {
        const touch = ev.changedTouches[0];

        clientX = touch.clientX;
        clientY = touch.clientY;
    }

    const data = {
        x: (clientX - rect.left) / rect.width,
        y: (clientY - rect.top) / rect.height,
    };

    return data;
};

export default getRelativePosition;

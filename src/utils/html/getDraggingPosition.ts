const getDraggingPosition = (
    ev: DragEvent,
    ele: HTMLElement
): { x: number; y: number } => {
    const rect = ele.getBoundingClientRect();

    return {
        x: (ev.x - rect.left) / rect.width,
        y: (ev.y - rect.top) / rect.height,
    };
};

export default getDraggingPosition;

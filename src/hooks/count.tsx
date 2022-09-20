import { useState } from "react";

interface CountInterface {
    init: number;
}

/**
 * @param init Initial value of the counter
 * @returns
 */

const useCount = ({ init }: CountInterface) => {
    const [count, setCount] = useState<number>(init);

    const inc = () => setCount((t) => t + 1);
    const dec = () => setCount((t) => t - 1);

    return { count, inc, dec };
};

export default useCount;

import useCount from "@/hooks/count";

interface CounterInterface {
    init: number;
}

const Counter = ({ init }: CounterInterface) => {
    const { count, inc, dec } = useCount({ init });
    return (
        <div className="aspect-video max-w-xs w-full rounded-md shadow-sm flex flex-col justify-evenly items-center border border-slate-200">
            <span className="text-lg font-bold text-slate-900">{count}</span>
            <div className="flex w-full justify-evenly">
                <button
                    className="h-10 w-32 border border-slate-200 rounded-md font-bold text-lg duration-300 hover:shadow active:shadow-none"
                    onClick={inc}
                >
                    +
                </button>
                <button
                    className="h-10 w-32 border border-slate-200 rounded-md font-bold text-lg duration-300 hover:shadow active:shadow-none"
                    onClick={dec}
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default Counter;

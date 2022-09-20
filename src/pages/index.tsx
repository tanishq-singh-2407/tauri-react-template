import Counter from "@/components/counter";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        setTimeout(() => alert("Hey! Hi"), 10 * 1000);
    }, []);

    return (
        <div className="min-h-visible h-full w-full">
            <main className="h-full w-full flex justify-center items-center">
                <Counter init={2} />
            </main>
        </div>
    );
};

export default Home;

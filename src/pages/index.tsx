import Counter from "@/components/counter";

const Home = () => {
    return (
        <div className="min-h-visible h-full w-full">
            <main className="h-full w-full flex justify-center items-center">
                <Counter init={2} />
            </main>
        </div>
    );
};

export default Home;

const IS_APP: boolean = import.meta.env.VITE_IS_APP as string === "true";

const Home = () => {
    return (
        <div className="min-h-visible h-full w-full">
            <main className="h-full w-full flex justify-center items-center">
                
                <span>hello</span>
                
            </main>
        </div>
    );
};

export default Home;
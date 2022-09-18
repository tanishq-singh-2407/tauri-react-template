import Header from "@/components/header";
import Footer from "@/components/footer";
import Movie from "@/components/movie";

const Home = (): JSX.Element => {
    return (
        <div className="h-full w-full flex justify-start items-center flex-col bg-[#f3f2f3]">
            <Header color="text-neutral-600" />

            <main className="flex justify-center items-center h-[calc(100%-8rem)] w-full px-5 relative">
                <Movie />
            </main>

            <Footer color="text-neutral-700" />
        </div>
    );
};

export default Home;

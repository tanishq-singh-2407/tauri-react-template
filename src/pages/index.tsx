import Counter from "@/components/counter";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Home = () => {
    return (
        <div className="min-h-visible h-full w-full flex justify-between items-center flex-col">
            <Header />
            <div /> {/* Don't Remove this div. */}
            <main className="w-full mt-16 py-5 flex flex-col justify-center items-center">
                <Counter init={2} />
            </main>
            <Footer />
        </div>
    );
};

export default Home;

import Header from "@/components/header";
import Footer from "@/components/footer";

const About = () => {
    return (
        <div className="min-h-visible h-full w-full flex justify-between items-center flex-col">
            <Header />
            <div /> {/* Don't Remove this div. */}
            <main className="w-full mt-16 py-5 flex flex-col justify-center items-center">
                <span>1, everything is fine. you tell!!</span>
                <span>Nothing, everything is fine. you tell!!</span>
                <span>Nothing, everything is fine. you tell!!</span>
                <span>Nothing, everything is fine. you tell!!</span>
            </main>
            <Footer />
        </div>
    );
};

export default About;

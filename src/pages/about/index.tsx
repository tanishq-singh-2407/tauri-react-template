import Header from "@/components/header";
import Footer from "@/components/footer";

const About = () => {
    return (
        <div className="min-h-visible h-full w-full flex justify-start items-center flex-col">
            <Header />

            <main className="h-[calc(100%-7rem)] w-full flex justify-center items-center">
                <span>Nothing, everything is fine. you tell!!</span>
            </main>

            <Footer />
        </div>
    );
};

export default About;

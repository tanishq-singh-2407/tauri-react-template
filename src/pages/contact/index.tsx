import Header from "@/components/header";
import Footer from "@/components/footer";

const Contact = () => {
    return (
        <div className="min-h-visible h-full w-full flex justify-between items-center flex-col">
            <Header />
            <div /> {/* Don't Remove this div. */}
            <main className="w-full mt-16 py-5 flex flex-col justify-center items-center gap-3">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-black text-base hover:underline underline-offset-4"
                    href="https://www.tanishqsingh.com"
                >
                    tanishqsingh.com
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-black text-base hover:underline underline-offset-4"
                    href="mailto:tanishqsingh@gmail.com"
                >
                    tanishqsingh@gmail.com
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-black text-base hover:underline underline-offset-4"
                    href="https://instagram.com/tanishq_singh_2301"
                >
                    instagram
                </a>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;

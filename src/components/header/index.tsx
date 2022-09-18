import { useNavigate } from "react-router-dom";
import classNames from "@/utils/basic/classNames";

type props = {
    color: string;
};

export default function Footer({ color }: props) {
    const navigate = useNavigate();

    return (
        <header className="h-16 w-full">
            <nav className="h-full w-full px-6 sm:px-8 flex justify-start items-center">
                <h3
                    onClick={() => navigate("/")}
                    className={classNames(
                        "text-base font-semibold italic underline cursor-pointer underline-offset-4",
                        color
                    )}
                >
                    Video Player
                </h3>
            </nav>
        </header>
    );
}

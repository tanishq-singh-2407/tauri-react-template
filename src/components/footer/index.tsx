import classNames from "@/utils/basic/classNames";

type props = {
    color: string;
};

export default function Footer({ color }: props) {
    return (
        <footer className="h-16 w-full flex justify-center items-center">
            <a
                className={classNames(
                    "text-base font-semibold italic hover:underline underline-offset-4",
                    color
                )}
                target="_blank"
                href="https://github.com/tanishq-singh-2301"
                rel="noreferrer"
            >
                Tanishq Singh 🤯
            </a>
        </footer>
    );
}

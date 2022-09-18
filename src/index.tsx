import "./index.css";
import "react-videotape/build/lib/index.css";
import ReactDOM from "react-dom/client";
import App from "@/router/index";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(<App />);

import { Home, Watch } from "./imports";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/watch" element={<Watch />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

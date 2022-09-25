import { Home, About, Contact, Functions } from "./imports";
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/functions" element={<Functions />} />
            </Routes>
        </HashRouter>
    );
};

export default App;

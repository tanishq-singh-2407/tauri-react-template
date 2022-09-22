import { Home, About, Contact, Functions } from "./imports";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/functions" element={<Functions />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

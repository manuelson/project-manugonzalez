import { Route, Routes } from 'react-router-dom';
import {Home} from "../../pages/Home.jsx";
import {About} from "../../pages/About.jsx";
import {Contact} from "../../pages/Contact.jsx";


export function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}
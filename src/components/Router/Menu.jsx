import { Home } from "../../pages/Home.jsx";
import { About } from "../../pages/About.jsx";
import { Contact } from "../../pages/Contact.jsx";

export const Menu = [
    {
        'index': 'Home',
        'url': '/',
        'element': Home
    },
    {
        'index': 'About us',
        'url': '/about',
        'element': About

    },
    {
        'index': 'Contact',
        'url': '/contact',
        'element': Contact

    }
]

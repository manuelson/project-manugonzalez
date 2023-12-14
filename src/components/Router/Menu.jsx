import { Home } from "../../pages/Home.jsx";
import { About } from "../../pages/About.jsx";
import { Contact } from "../../pages/Contact.jsx";

export const Menu = [
    {
        'index': 'Home',
        'url': '/',
        'element': <Home/>,
        'public': true
    },
    {
        'index': 'Blog',
        'url': '/blog',
        'element': <About/>,
        'public': true

    },
    {
        'index': 'About us',
        'url': '/about',
        'element': <About/>,
        'public': true

    },
    {
        'index': 'Contact',
        'url': '/contact',
        'element': <Contact/>,
        'public': true
    }
]

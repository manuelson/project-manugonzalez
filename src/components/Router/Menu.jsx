import { Home } from "../../pages/Home.jsx";
import { About } from "../../pages/About.jsx";
import { Contact } from "../../pages/Contact.jsx";
import { Blog } from "../../pages/Blog.jsx";

export const Menu = [
    {
        index: "Home",
        path: "/",
        element: <Home/>,
        public: true
    },
    {
        index: "Blog",
        path: '/blog',
        element: <Blog/>,
        public: true
    },
    {
        index: "About",
        path: '/about',
        element: <About/>,
        public: true
    },
    {
        index: "Contact",
        path: '/contact',
        element: <Contact/>,
        public: true
    }
]




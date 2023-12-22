import { Home } from "../../pages/Home.jsx";
import { About } from "../../pages/About.jsx";
import { Contact } from "../../pages/Contact.jsx";
import { Blog } from "../../pages/Blog.jsx";
import { Login } from "../../pages/Login.jsx";
import { Profile } from "../../pages/Profile.jsx";

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
    },
    {
        index: "Login",
        path: '/login',
        element: <Login/>,
        public: false
    },
    {
        index: "Profile",
        path: '/profile/:userId',
        element: <Profile/>,
        public: false
    }
]




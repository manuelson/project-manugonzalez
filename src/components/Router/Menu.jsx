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
        public: false
    },
    {
        index: "Contact",
        path: '/contact',
        element: <Contact/>,
        public: false
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
    },
    {
        index: "Post",
        path: 'post/:id',
        element: <Profile/>,
        public: false
    }
]




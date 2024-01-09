import { createBrowserRouter } from "react-router-dom"
import { Layout } from "src/layout/Index.jsx"
import { ErrorPage } from "src/pages/ErrorPage.jsx";
import {Home} from "src/pages/Home.jsx";
import {BlogPage} from "src/pages/Blog.jsx";
import {About} from "src/pages/About.jsx";

export const Router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: "Home",
                path: "/",
                element: <Home/>
            },
            {
                index: "Blog",
                path: '/blog',
                element: <BlogPage/>
            },
            {
                index: "About",
                path: '/about',
                element: <About/>
            }
        ],
    },
]);
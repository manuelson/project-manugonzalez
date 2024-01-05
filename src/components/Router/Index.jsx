import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../../layout/Index.jsx"
import { ErrorPage } from "../../pages/ErrorPage.jsx";
import {Home} from "../../pages/Home.jsx";
import {Blog} from "../../pages/Blog.jsx";
import {About} from "../../pages/About.jsx";

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
                element: <Blog/>
            },
            {
                index: "About",
                path: '/about',
                element: <About/>
            }
        ],
    },
]);
import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../../layout/Index.jsx"
import { Menu } from "./Menu.jsx"
import { ErrorPage } from "../../pages/ErrorPage.jsx";

export const Router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: Menu,
    },
]);
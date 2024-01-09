import 'bootstrap/dist/css/bootstrap.min.css'
import {RouterProvider} from "react-router-dom"
import {Router} from "./components/Router.jsx"
import 'animate.css';

function App() {

    return (
        <RouterProvider router={Router} />
    )
}

export default App

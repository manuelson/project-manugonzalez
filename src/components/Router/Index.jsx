import { Route, Routes } from 'react-router-dom';
import { Menu } from './Menu.jsx';


export function Router() {

    return (
        <Routes>
        {
            Menu.map((item, index) => {
                return (
                    <Route key={`router-${index}`} path={item.url} element={item.element}/>
                )
            })
        }
        </Routes>
    )
}
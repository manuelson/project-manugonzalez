import { Link, useLocation} from 'react-router-dom';
import { Menu } from '../Router/Menu.jsx';
import './NavBar.css'

export function NavBar() {
    const location = useLocation().pathname;

    return (

        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {
                            Menu.map((item, index) => {
                                return (
                                    <li className="nav-item" key={`nav-${index}`}>
                                        <Link
                                            className={ `nav-link px-2 ${location === item.url ? 'text-secondary' : 'text-white'}` }
                                            to={item.url}>
                                            {item.index}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-dark">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

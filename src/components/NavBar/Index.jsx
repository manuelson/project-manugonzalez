import { Link, useLocation} from 'react-router-dom';
import { Menu } from '../Router/Menu.jsx';

export function NavBar() {
    const location = useLocation().pathname;

    return (
        <nav className="nav nav-pills">
            {
                Menu.map((item, index) => {
                    return (
                        <li className="nav-item" key={`nav-${index}`}>
                            <Link
                                className={ `nav-link ${location === item.url ? 'active' : ''}` }
                                to={item.url}>
                                {item.index}
                            </Link>
                        </li>
                    )
                })
            }
        </nav>
    )
}
import { Link, useLocation} from 'react-router-dom';

export function NavBar() {
    const location = useLocation().pathname;

    let menuItems = [
        {
            'index': 'Home',
            'url': '/'
        },
        {
            'index': 'About us',
            'url': '/about'
        },
        {
            'index': 'Contact',
            'url': '/contact'
        }
    ]

    return (
        <nav className="nav nav-pills">
            {
                menuItems.map((menuItem, index) => {
                    return (
                        <>
                            <li className="nav-item" key={`nav-${index}`}>
                                <Link  className={ `nav-link ${location === menuItem.url ? 'active' : ''}` } to={menuItem.url}>{menuItem.index}</Link>
                            </li>
                        </>
                    )
                })
            }
        </nav>
    )
}
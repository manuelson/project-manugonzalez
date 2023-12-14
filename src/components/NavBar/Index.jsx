import { Link, useLocation} from 'react-router-dom';

export function NavBar() {

    const location = useLocation().pathname.substring(1);
    console.log(location)
    let menuItems = [
        {
            'index': 'Home',
            'url': ''
        },
        {
            'index': 'About us',
            'url': 'about'
        },
        {
            'index': 'Contact',
            'url': 'contact'
        }
    ]

    return (
        <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                {
                    menuItems.map((menuItem) => {
                        return (
                            <>
                                <li className="nav-item">
                                    <Link className={ `nav-link ${location == menuItem.url ? 'active' : ''}` } to={menuItem.url}>{menuItem.index}</Link>
                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </header>
    )
}


/**
 *             )
 *
 *     return menuItems.map((menuItem, index, users) => {
 *         return (
 *             <>
 *                 <div>
 *                     <span>{menuItem.index}</span>
 *                 </div>
 *             </>
 *         )
 *     })
 */
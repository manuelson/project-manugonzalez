import { Link, useLocation, useNavigate} from 'react-router-dom';
import { Menu } from '../Router/Menu.jsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'

export function NavBar() {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const routeChange = () =>{
        let path = `login`;
        navigate(path);
    }

    return (
        <header className="p-3 navbg">
            <Navbar expand="lg" className="">
                <Container>
                    <Navbar.Brand href="/" className="logo">[M]</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                Menu.map((item, index) => {
                                    if (item.public === true) {
                                        return (
                                            <Link
                                                key={`nav-${index}`}
                                                className={`nav-link px-2 ${location === item.path ? 'text-secondary' : 'text-white'}`}
                                                to={item.path}>
                                                {item.index}
                                            </Link>
                                        )
                                    }
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

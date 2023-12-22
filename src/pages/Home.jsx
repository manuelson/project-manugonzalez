import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

export function Home() {

    useEffect(() => {
        document.title = 'Home Page';
    }, []);

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-11 col-xl-9">
                    <section className="py-4 py-lg-5">
                        <div className="mb-3 d-flex">
                            <div>
                                <span className="badge badge-success">1.3.0</span>
                            </div>
                        </div>
                        <h1 className="display-4 mb-3">Welcome to my world.</h1>
                        <p className="lead text-grey">
                            Hi, I'm Manu Gonzalez, full stack developer.
                        </p>
                        <div className="d-flex">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
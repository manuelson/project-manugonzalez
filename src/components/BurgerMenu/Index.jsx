import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom";

export function BurgerMenu() {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a
                onClick={handleShow}
                className="rounded-circle button-menu d-flex justify-content-center align-items-center align-content-center">
                <svg
                    className="icon-menu"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M4 6H20M4 12H20M4 18H20" strokeWidth="2"/>
                </svg>
            </a>


            <Modal
                show={show}
                onHide={handleClose}
                className="popup d-flex justify-content-center align-items-center"
            >
                <div className="bgMenu px-3 py-3 rounded-3">
                    <div className="d-md-flex nav-cards gap-4 ">
                        <Link
                            onClick={handleClose}
                            className="p-4 rounded-3 animate__animated  animate__fadeInUp"
                            to={`/blog`}>
                            <h3 className="h6">Blog</h3>
                            <p className="">Read what I share</p>
                        </Link>
                        <Link
                            onClick={handleClose}
                            className="p-4 rounded-3 animate__animated  animate__fadeInUp card-delay-1"
                            to={`/portfolio`}>
                            <h3 className="h6">Portfolio</h3>
                            <p>
                                Projects, experiences knowledge
                            </p>
                        </Link>
                    </div>
                    <div className="d-md-flex nav-cards gap-4 mt-4">
                        <Link
                            onClick={handleClose}
                            className="p-4 rounded-3 animate__animated  animate__fadeInUp card-delay-2"
                            to={`/about`}>
                            <h3 className="h6">About</h3>
                            <p className="">Read more about me</p>
                        </Link>
                        <Link
                            onClick={handleClose}
                            className="p-4 rounded-3 animate__animated  animate__fadeInUp card-delay-3"
                            to={`/portfolio`}>
                            <h3 className="h6">Let's talk</h3>
                            <p>
                                Any questions?
                            </p>
                        </Link>
                    </div>
                </div>
            </Modal>
        </>
    );
}
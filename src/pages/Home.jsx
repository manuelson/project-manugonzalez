import { useEffect } from 'react';
import {Banner} from "../components/Banner/Index.jsx";
import {Skills} from "../components/Skills/Index.jsx";
import {Link} from "react-router-dom";

export function Home() {

    useEffect(() => {
        document.title = 'Home Page';
    }, []);
    return (
        <>
            <Banner />
            <section id="pages" className="container mt-5">
                <h2 className="h6">Pages</h2>
                <hr />
                <div className="d-md-flex nav-cards gap-4 ">
                    <Link
                        className="p-4 rounded-3 animate__animated  animate__fadeInUp"
                        to={`/blog`}>
                        <h3 className="h6">Blog</h3>
                        <p className="">Read what I share</p>
                    </Link>
                    <Link
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
                        className="p-4 rounded-3 animate__animated  animate__fadeInUp card-delay-2"
                        to={`/about`}>
                        <h3 className="h6">About</h3>
                        <p className="">Read more about me</p>
                    </Link>
                    <Link
                        className="p-4 rounded-3 animate__animated  animate__fadeInUp card-delay-3"
                        to={`/portfolio`}>
                        <h3 className="h6">Let's talk</h3>
                        <p>
                            Any questions?
                        </p>
                    </Link>
                </div>
            </section>
            <Skills />
        </>
    )
}
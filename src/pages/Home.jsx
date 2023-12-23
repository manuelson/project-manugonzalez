import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import avatar from '../assets/avatar-manu.png';
import { BlogLayer } from '../components/BlogLayer/Index.jsx';

export function Home() {

    useEffect(() => {
        document.title = 'Home Page';
    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 col-xl-9">
                        <section className="py-4 py-lg-5">
                            <h1 className="display-4 mb-3">Welcome to my world.</h1>
                            <p className="lead text-grey">
                                Hi, I'm Manu Gonzalez, full stack developer.
                            </p>
                        </section>
                    </div>
                </div>
               <BlogLayer />
            </div>
        </>
    )
}
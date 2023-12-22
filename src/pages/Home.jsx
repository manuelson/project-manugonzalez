import { useEffect } from 'react';

export function Home() {

    useEffect(() => {
        document.title = 'Home Page';
    }, []);

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-11 col-xl-9">
                    <section className="py-4 py-lg-5">
                        <h1 className="display-4 mb-3">Welcome to my world.</h1>
                        <p className="lead text-grey">
                            Hi, I'm Manu Gonzalez, full stack developer.
                        </p>
                    </section>
                    <hr className="my-lg-4 my-3" />
                </div>
            </div>
        </>
    )
}
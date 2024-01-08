import { useEffect } from 'react';
import {Blog} from "../components/Blog/Index.jsx";

export function BlogPage() {

    useEffect(() => {
        document.title = 'Blog';
    }, []);

    return (
        <>
            <section id="intro" className="container my-14">
                <div className="md:w-3/5">
                    <h1 className="mb-2">
                        About my <span className="text-advice">Blog</span></h1>
                    <p className="dark:text-grey-light-900 md:text-largest">
                        All about web development. Want to hear more? You can also find me on <a target="_blank" href="https://twitter.com/manuelsoon" className="text-advice">Twitter</a>.
                    </p>
                </div>
            </section>
            <Blog />
        </>
    )
}
import { useEffect } from 'react';
import {Banner} from "../components/Banner/Index.jsx";
import {Skills} from "../components/Skills/Index.jsx";
import {Blog} from "../components/Blog/Blog.jsx";

export function Home() {

    useEffect(() => {
        document.title = 'Home Page';
    }, []);
    return (
        <>
            <Banner />
            <Blog />
            <Skills />
        </>
    )
}
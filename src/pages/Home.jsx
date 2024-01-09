import { useEffect } from 'react';
import {Banner} from "src/components/Banner.jsx";
import {Skills} from "src/components/Skills.jsx";
import {Blog} from "src/components/Blog.jsx";

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
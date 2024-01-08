import { useEffect } from 'react';
import {Banner} from "../components/Banner/Index.jsx";
import {Skills} from "../components/Skills/Index.jsx";
import {BlogLayer} from "../components/Blog/BlogLayer.jsx";

export function Home() {

    useEffect(() => {
        document.title = 'Home Page';
    }, []);
    return (
        <>
            <Banner />
            <BlogLayer />
            <Skills />
        </>
    )
}
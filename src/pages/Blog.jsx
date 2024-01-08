import { useEffect } from 'react';
import {Blog} from "../components/Blog/Index.jsx";

export function BlogPage() {

    useEffect(() => {
        document.title = 'Blog';
    }, []);

    return (
        <>
            <Blog />
        </>
    )
}
import {useEffect} from "react";

export function Blog() {

    useEffect(() => {
        document.title = 'Blog';
    }, []);

    return (
        <span>Blog Page</span>
    )
}
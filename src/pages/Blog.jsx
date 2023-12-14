import {useEffect} from "react";

export function Blog() {

    useEffect(() => {
        document.title = 'Manu Gonzalez Blog';
    }, []);

    return (
        <span>Blog Page</span>
    )
}
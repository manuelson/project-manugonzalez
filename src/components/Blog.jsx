import {useEffect, useState} from "react";
import BlogRepository from "src/service/BlogApi.jsx";
import {Link} from "react-router-dom";

export function Blog() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        let blog = new BlogRepository()
        blog.getPosts().then((data) => {
            setPosts(data)
        })
    }, [BlogRepository]);

    return (
        <>
            <section id="blog" className="container mt-5">
                <h2 className="h6">Blog</h2>
                <hr />
                <div className="d-grid gap-3 blog ">
                {
                    posts.map((post, index) => (
                        <div key={`post-${index}`} className="d-flex align-items-center blog-box w-100 justify-content-center">
                            <span>
                                 <Link className="text-advice" to={`/post/${post.id}`}>
                                            {post.title}
                                 </Link>
                            </span>
                        </div>
                    ))
                }
                </div>
            </section>
        </>
    )
}
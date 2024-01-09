import {useEffect, useState} from "react";
import BlogRepository from "src/service/BlogApi.jsx";
import {Link} from "react-router-dom";
import {GetImageAssets} from "../utils/GetImageAssets.jsx";

export function Posts() {

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
                <h2 className="h6">Last Posts</h2>
                <hr />
                <div className="d-grid gap-3 blog">
                {
                    posts.map((post, index) => (
                        <div key={`post-${index}`} className="d-flex align-items-center blog-box w-100 justify-content-center">
                            <span>
                                 <Link to={`/post/${post.id}`}>
                                     <div className="position-absolute px-3 py-3 d-flex">
                                         <span className="badge text-advice">React</span>
                                         <span className="badge text-advice">Javascript</span>
                                     </div>

                                     <img
                                         className="blog-image rounded-3"
                                         src={GetImageAssets(post.image)}
                                         alt={post.title}
                                          />
                                     <h3 className="pt-3">{post.title}</h3>
                                     <p className="mt-3">{post.resume}</p>
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
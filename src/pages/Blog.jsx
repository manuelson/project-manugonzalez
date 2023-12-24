import { BlogLayer } from '../components/BlogLayer/Index.jsx';
import {useEffect, useState} from "react";
import BlogRepository from "../models/BlogRepository.jsx";
import avatar from "../assets/avatar-manu.png";
import ListGroup from "react-bootstrap/ListGroup";
import {Link} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import './Blog.css'

export function Blog() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let blog = new BlogRepository()
        setLoading(true)
        blog.getPosts().then((data) => {
            setPosts(data)
            setLoading(false)
        })
    }, [BlogRepository]);

    if (loading) {
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="post mb-4">
                        <h2 className="post-title fw-semibold">
                            <Skeleton />
                        </h2>
                        <Skeleton width="30px" height="30px" circle="true" inline="true" />
                        <Skeleton width="140px" className="skeletonDate" />

                        <p>
                            <Skeleton count={5} />
                        </p>
                    </div>
                    <div className="post mb-4">
                        <h2 className="post-title fw-semibold">
                            <Skeleton />
                        </h2>
                        <Skeleton width="30px" height="30px" circle="true" inline="true" />
                        <Skeleton width="140px" className="skeletonDate" />

                        <p>
                            <Skeleton count={5} />
                        </p>
                    </div>
                    <div className="post mb-4">
                        <h2 className="post-title fw-semibold">
                            <Skeleton />
                        </h2>
                        <Skeleton width="30px" height="30px" circle="true" inline="true" />
                        <Skeleton width="140px" className="skeletonDate" />

                        <p>
                            <Skeleton count={5} />
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {
                        posts.map((post, index) => (
                            <div className="post mb-4">
                                <h2 className="post-title fw-semibold">
                                   {post.title}
                                </h2>

                                <div className="d-flex align-items-center mb-4 text-muted author-info">
                                    <a className="d-flex align-items-center text-muted text-decoration-none" href="https://github.com/mdo" target="_blank" rel="noopener">
                                        <img src={avatar} className="avatar filter-by-alt mb-0 me-2" data-filter-by="alt"/>
                                        <span>@{post.author}</span>
                                    </a>
                                    <span className="d-flex align-items-center ms-3" title="12 Sep 23 00:01 UTC">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="me-2" viewBox="0 0 16 16" role="img" fill="currentColor">
                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
                                </svg>
                                    {
                                        new Date(post.created_at).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        }.toString())
                                    }
                                    </span>
                                </div>
                                <p>
                                    {post.body}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
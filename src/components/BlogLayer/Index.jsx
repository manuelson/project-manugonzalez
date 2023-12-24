import ListGroup from "react-bootstrap/ListGroup";
import avatar from "../../assets/avatar-manu.png";
import { useState, useEffect } from "react";
import BlogRepository from "../../models/BlogRepository.jsx";
import {Link} from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './BlogLayer.css'

export function BlogLayer() {

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

    const getStateMessage = (state) => (
        <section id="blog">
            <div>
                <h3>Blog entry</h3>
            </div>
            <ListGroup>
                <ListGroup.Item>
                    <div className="media align-items-center">
                        {state}
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </section>
    )

    if (posts === null) {
        return(
            getStateMessage('An error ocurred while get information.')
        )
    }
    if (loading) {
        return(
            <section id="blog">
                <div>
                    <h3>Blog entry</h3>
                </div>
                <ListGroup>
                    <ListGroup.Item>
                        <Skeleton />
                        <Skeleton className="skeletonWidht" />
                    </ListGroup.Item>
                </ListGroup>
            </section>
        )
    }
    if (posts.length === 0 && !loading) {
        return(
            getStateMessage('No blog entries were found.')
        )
    }

    return (
        <section id="blog">
            <div className="mb-4">
                <h3>Blog entry</h3>
            </div>
            <ListGroup>
                {
                    posts.map((post, index) => (
                        <ListGroup.Item key={`post-${index}`}>
                            <div className="media align-items-center">
                                <ul className="avatars">
                                    <li className="p-2">
                                        <img alt="Peggy" src={avatar} className="avatar filter-by-alt" data-filter-by="alt"/>
                                    </li>
                                </ul>
                                <div className="media-body">
                                    <div>
                                        <span className="text-"><strong>Manu</strong> </span>
                                        <span className="text-grey text-muted">added blog entry </span>
                                        <Link
                                            to={`post/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </div>
                                    <span className="text-small">
                                         {
                                             new Date(post.created_at).toLocaleDateString('en-GB', {
                                                 day: 'numeric',
                                                 month: 'short',
                                                 year: 'numeric'
                                             }.toString())
                                         }
                                    </span>
                                </div>
                            </div>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </section>
    )
}
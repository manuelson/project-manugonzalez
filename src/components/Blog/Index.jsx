import ListGroup from "react-bootstrap/ListGroup";
import avatar from "../../assets/avatar-manu.png";
import Database  from "../../service/Database.jsx";
import { useState, useEffect } from "react";
import BlogRepository from "../../models/BlogRepository.jsx";
import {Link} from "react-router-dom";

export function Blog() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        let blog = new BlogRepository()
        blog.getPosts().then((data) => {
            if (data) setPosts(data)
        })
    }, [BlogRepository]);

    if (posts.length === 0) {
        return(
            <section id="blog">
                <div>
                    <h3>Blog entry</h3>
                </div>
                <ListGroup>
                    <ListGroup.Item>
                        <div className="media align-items-center">
                            No blog entries were found.
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </section>
        )
    }

    return (
        <section id="blog">
            <div>
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
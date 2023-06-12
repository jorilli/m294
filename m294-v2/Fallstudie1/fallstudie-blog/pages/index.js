import styles from "./index.module.css"
import {getAllPosts} from "@lib/api";
import {useEffect, useState} from "react";
import Link from "next/link";
import CreatePost from "./posts/create";
import {useRedirectToLogin} from "@lib/session";

export default function IndexPage({session}) {
    const [post, setPost] = useState([])
    useEffect(() => {
        const loadPosts = async () => {
            try {
                const post = await getAllPosts()
                setPost(post)
            } catch (e) {
                alert("An Error occurred while getting all posts.")
            }
        }
        loadPosts()
    }, [])

    return (
        <div>
            <h1>Welcome to my blog!</h1>
            <br/>
            <Link href={'/posts/create'}>create new Post</Link>
            <br/>
            <Link key="login" href="/login">Login</Link>
            <br/>
            <br/>
            {post.map((post) => {
                    return (
                        <article key={post.id}>
                            <h2>
                                {post.title}
                            </h2>
                            <p>{post.text.substring(0, 600) + "..."}</p>
                            <Link href={`/posts/${post.id}`}>Read more</Link>
                            <br/>
                            <br/>
                        </article>
                    )
                })
            }
        </div>
    )
}

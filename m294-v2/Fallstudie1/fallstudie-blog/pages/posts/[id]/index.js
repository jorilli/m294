import {useEffect, useState} from "react";
import {deletePost, getPostById} from "@lib/api";
import {useRouter} from "next/router";
import Link from "next/link";

export default function PostPage({session}) {
    const user = session.user
    const [post, setPost] = useState([])
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if (!id) return
        const loadPost = async () => {
            try {
                const post = await getPostById(id)
                setPost(post)
            } catch (e) {
                if (e.status === 404) router.push("/404")
            }
        }
        loadPost()
    }, [id, router])

    const handleDelete = async (e) => {
        if (confirm("Delete post?")) {
            await deletePost(post.id)
            alert("Post deleted!")
            router.push("/")
        }
    }

    return !post ? null : (
        <article>
            <div>
                <Link href="http://localhost:3000" passHref className="button">
                    <h1>Home</h1>
                </Link>
                <br/>
                {session.user && <Link href={`/posts/${post.id}/edit`} passHref className="button">Edit</Link>}
                {session.user && <br/>}
                {session.user && <a href="#" className="button" onClick={handleDelete}>Delete</a>}
            </div>
            <br/>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
        </article>
    )
}
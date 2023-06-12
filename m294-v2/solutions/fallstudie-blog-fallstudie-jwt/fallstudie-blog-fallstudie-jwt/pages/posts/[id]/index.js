import { deletePost, getPostById } from "@lib/api"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "./index.module.css"

export default function PostPage({ session }) {
    const user = session.user
    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState([])

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

    return !post ? null : (
        <article>
            <div className={styles.admin}>
                {
                    user && <>
                        <Link href={`/posts/${post.id}/edit`} passHref className="button">
                            Edit
                        </Link>

                        <a href="#" className="button" onClick={async (e) => {
                            if (confirm("Delete post?")) {
                                await deletePost(post.id, session.accessToken)
                                alert("Post deleted!")
                                router.push("/")
                            }
                        }}>Delete</a>
                    </>
                }
            </div>

            <h1>{post.title}</h1>
            <p>{post.text}</p>
        </article>

    )
}
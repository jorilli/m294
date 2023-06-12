import PostForm from "@components/PostForm"
import { getPostById } from "@lib/api"
import { useRedirectToLogin } from "@lib/session"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function PostsEditPage({ session }) {
    useRedirectToLogin(session)

    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState(null)

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
        <div>
            <h1>Edit post</h1>
            <PostForm session={session} postToEdit={post} />
        </div>
    )
}


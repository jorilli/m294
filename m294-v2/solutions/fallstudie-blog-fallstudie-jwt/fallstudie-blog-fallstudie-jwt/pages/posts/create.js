import PostForm from "@components/PostForm"
import { useRedirectToLogin } from "@lib/session"
import styles from "./create.module.css"

export default function PostsCreatePage({ session }) {
    useRedirectToLogin(session)

    return session.user ? (
        <div className={styles.postcreate}>
            <h1>Create new post</h1>
            <PostForm session={session} />
        </div>
    ) : null
}
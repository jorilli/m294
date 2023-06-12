import PostForm from "@components/PostForm";
import {useRedirectToLogin} from "@lib/session";

export default function CreatePost({ session }) {
    useRedirectToLogin(session)
    return (
        <div>
            <h1>Create new post { session.user && <div>Creator: {session.user.name}</div>}</h1>
            { session.user && <PostForm session={session}/>}
        </div>
    )
}
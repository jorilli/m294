import { createPost, updatePost } from "@lib/api";
import { useEffect, useState } from "react"
import styles from "./PostForm.module.css"
import {useRouter} from "next/router";

const defaultModel = {
    title: "",
    text: ""
}

function validateModel(post) {
    const errors = {
        title: "",
        text: ""
    }
    let isValid = true

    // Hier musst du den Post validieren und die Fehlermeldung auf dem errors Objekt setzen
    // Wenn der Post nicht valide ist, musst zu auch isValid = false setzen.
    // denn Aufruf findest du in der Funktion handleSubmit unten
    if (post.title.trim().length === 0) {
        errors.title = "Title can't be empty!"
        isValid = false
    }

    if (post.text.trim().length === 0) {
        errors.text = "Text can't be empty!"
        isValid = false;
    }

    return { errors, isValid }
}

export default function PostForm({ session, postToEdit }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(defaultModel)
    const [post, setPost] = useState(defaultModel)

    useEffect(() => {
        if (postToEdit) {
            setPost(postToEdit)
        }
    }, [postToEdit])

    const handleChange = (e) => {
        // Hier musst du die Werte aus dem Formular in den Post schreiben
        const target = e.target
        const name = target.name
        const value = target.value
        setPost({
            ...post,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(defaultModel)

        const result = validateModel(post)

        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }

        if (post.id) {
            // Post updaten
           try {
               await updatePost(post, session.token)
               alert("Post updated!")
               await router.push(`/posts/${post.id}`)
           } catch (e) {
               alert("Could not update post.")
           }
        } else {
            // Post erstellen
            try {
                const newPost = await createPost(post, session.token)
                alert("Post created!")
                await router.push(`/posts/${newPost.id}`)
            } catch (e) {
                alert("Could not create post.")
            }
        }

        setIsLoading(false)
    }

    return (
        <div className={styles.postform}>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={handleChange} value={post.title}/>
                    {errors.title && <div>{errors.title}</div>}
                </fieldset>
                <fieldset>
                    <label>Text:</label>
                    <textarea name="text" onChange={handleChange} value={post.text}/>
                    {errors.text && <div>{errors.text}</div>}
                </fieldset>
                <button disabled={isLoading}>{isLoading ? "...loading" : "Submit"}</button>
            </form>
        </div>
    )
}
import Link from "next/link"
import styles from './index.module.css'

export default function Home() {
    return (
        <div className={ styles.container }>
            <h1>Web APIs</h1>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API" target="__blank">Web APIs auf MDN</a>

            <h2>Cookies</h2>
            <Link href="/cookies">
                /cookies
            </Link>

            <h2>Localstorage</h2>
            <Link href="/todos">
                /todos
            </Link>

            <h2>Fullscreen</h2>
            <button onClick={e => {
                document.documentElement.requestFullscreen()
            }}>go fullscreen</button>

            <h2>Image upload</h2>
            <Link href="/imageupload">
                /imageupload
            </Link>

            <h2>Notifications</h2>
            <Link href="/notifications">
                /notifications
            </Link>

            <h2>Geolocation</h2>
            <Link href="/geolocation">
                /geolocation
            </Link>

            <h2>Text To Speech</h2>
            <Link href="/tts">
                /tts
            </Link>

            <h2>WebGL</h2>
            <Link href="/webgl">
                /webgl
            </Link>

            <h2>WebSockets</h2>
            <Link href="/chat">
                /chat
            </Link>
        </div>
    )
}

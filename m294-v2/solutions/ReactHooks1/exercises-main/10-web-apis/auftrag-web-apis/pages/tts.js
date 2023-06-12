import styles from "./tts.module.css"
import { useRef } from "react"

export default function TextToSpeech() {
    const textareaRef = useRef()
    const read = (e) => {
        e.preventDefault()
        const text = textareaRef.current.value
        const msg = new SpeechSynthesisUtterance()
        msg.text = text
        speechSynthesis.speak(msg)
    }

    return (
        <div className={styles.texttospeech}>
            <h1>Text To Speech</h1>
            <form>
                <textarea ref={textareaRef} name="text" />
                <button onClick={read}>read</button>
            </form>
        </div>
    )
}
import styles from './chat.module.css'
import { useWebSocket } from "@/lib/hooks/useWebSocket"
import {useEffect, useRef, useState} from "react"

const name = "rawphl"

export default function Home() {
    const socket = useWebSocket("https://bbc-websocket.herokuapp.com")
    const [message, setMessage] = useState("")
    const ulRef = useRef()

    useEffect(() => {
        ulRef.current.scrollTop =  ulRef.current.scrollHeight;
    }, [socket.messages])

    return (
        <div className={ styles.container }>
            <main className={ styles.main }>
                <h1 className={ styles.title }>
                    WebSocket chat with <a href="https://nextjs.org">Next.js</a> and <a
                    href="https://socket.io/">socket.io</a>
                </h1>

                <ul className={styles.ul} ref={ulRef}>
                    {
                        socket.messages.map(({user, message, date}, i) => {
                            return <li
                                className={user === name ? styles.odd : styles.even}
                                key={message}>
                                [{date}] {user ? user + " says:" : ""} {message}
                            </li>
                        })
                    }
                </ul>

                <form onSubmit={ (e) => {
                    e.preventDefault()
                    if (!message.trim()) return
                    socket.send(message)
                    setMessage("")
                } }>
                    <input type="text" name="message" onChange={ e => setMessage(e.target.value) } value={ message }/>
                    <button type="submit">send</button>
                </form>

                { !socket.isConnected && <button onClick={ () => socket.connect(name) }>
                    connect
                </button> }

                { socket.isConnected && <button onClick={ () => socket.disconnect() }>
                    disconnect
                </button> }


            </main>
        </div>
    )
}

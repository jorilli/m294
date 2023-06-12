import io from 'socket.io-client'
import { useRef, useState } from "react"

const defaultState = {
    userName: "",
    isConnected: false
}

export function useWebSocket(url) {
    const socketRef = useRef(null)
    const [state, setState] = useState(defaultState)
    const [messages, setMessages] = useState([])

    return {
        ...state,
        messages,
        connect(userName) {
            if(state.userName && socketRef.current) return
            const socket = io(url)
            socketRef.current = socket
            socket.on("connect", () => {
                setState({
                    isConnected: true,
                    userName
                })
                socket.emit("username", userName)
            })
            socket.on("broadcast", (newMessage) => setMessages(messages => [...messages, newMessage]))
        },
        disconnect() {
            socketRef.current?.disconnect()
            setState(defaultState)
            socketRef.current = null
        },
        send(message) {
            socketRef.current?.emit("message", message)
        }
    }
}
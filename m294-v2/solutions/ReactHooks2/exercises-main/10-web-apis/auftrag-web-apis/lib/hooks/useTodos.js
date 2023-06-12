import { useEffect, useState } from "react"

export function useTodos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const todos = localStorage.getItem("todos")
        if (todos !== null) {
            setTodos(JSON.parse(todos))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return {
        todos,
        add(todo) {
            setTodos(todos => [...todos, todo])
        },
        remove(todo) {
            setTodos(todos => todos.filter(t => t.id !== todo.id))
        },
        toggle(todo) {
            setTodos(todos => todos.map((t) => {
                if (t.id === todo.id) {
                    const updatedTodo = { ...t }
                    updatedTodo.complete = !updatedTodo.complete
                    return updatedTodo
                } else {
                    return t
                }
            }))
        },
        clear() {
            setTodos([])
        }
    }
}

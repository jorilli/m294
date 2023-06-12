import { useState } from "react"
import styles from './index.module.css'
import { useTodos } from "@/lib/hooks/useTodos"

export default function Todos() {
    const todoService = useTodos()
    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title) return
        todoService.add({
            id: Date.now().toString(),
            title,
            complete: false
        })
        setTitle("")
        e.target.title.focus()
    }

    return (
        <div className={ styles.container }>
            <h1>Todos</h1>

            <pre style={ { position: "fixed", top: 0, right: "30vw" } }>
                { JSON.stringify(todoService.todos, null, 4) }
            </pre>

            <form onSubmit={ handleSubmit }>
                <input name="title" type="text" onChange={ (e) => setTitle(e.target.value) } value={ title }/>
                <button type="submit">add</button>
                <button onClick={ () => todoService.clear() }>clear</button>
            </form>
            {
                todoService.todos.map(todo => {
                    return (
                        <article key={ todo.id }>
                            <h2>{ todo.title } <input type="checkbox" onChange={ () => todoService.toggle(todo) }
                                                      checked={ todo.complete }/></h2>
                            <button onClick={ (e) => todoService.remove(todo) }>remove</button>
                        </article>
                    )
                })
            }
        </div>
    )
}

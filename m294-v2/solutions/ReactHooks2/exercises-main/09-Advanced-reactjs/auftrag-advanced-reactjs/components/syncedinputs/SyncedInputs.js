import { useEffect, useState } from "react"
import Input from "components/syncedinputs/Input"
import styles from "components/syncedinputs/SyncedInputs.module.css"

export default function SyncedInputs({ value }) {
    const [text, setText] = useState("")

    useEffect(() => {
        setText(value)
    }, [value])

    const handleChange = (e) => setText(e.target.value)

    return (
        <div className={ styles.syncedinputs }>
            <Input label="First input" value={ text } onChange={ handleChange }/>
            <Input label="Second input" value={ text } onChange={ handleChange }/>
        </div>
    )
}
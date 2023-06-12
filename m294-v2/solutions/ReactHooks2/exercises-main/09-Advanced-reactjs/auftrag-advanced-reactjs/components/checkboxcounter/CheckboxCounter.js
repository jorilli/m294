import { useState } from "react"
import Checkbox from "components/checkboxcounter/Checkbox"
import styles from "components/checkboxcounter/CheckboxCounter.module.css"

export default function CheckboxCounter() {
    const [checkedBoxes, setCheckedBoxes] = useState({
        chocolate: false,
        candy: false,
        pizza: false,
        apples: false
    })

    const handleChange = (e) => {
        const name = e.target.name
        const checked = e.target.checked
        setCheckedBoxes({
            ...checkedBoxes,
            [name]: checked
        })
    }

    const checkedCount = Object.values(checkedBoxes).filter(value => value).length

    return (
        <div className={ styles.checkboxcounter }>
            <p>Checked count: { checkedCount }</p>
            <form>
                <Checkbox
                    label="chocolate"
                    name="chocolate"
                    checked={ checkedBoxes.chocolate }
                    onChange={ handleChange }
                />
                <Checkbox
                    label="candy"
                    name="candy"
                    checked={ checkedBoxes.candy }
                    onChange={ handleChange }
                />
                <Checkbox
                    label="pizza"
                    name="pizza"
                    checked={ checkedBoxes.pizza }
                    onChange={ handleChange }
                />
                <Checkbox
                    label="apples"
                    name="apples"
                    checked={ checkedBoxes.apples }
                    onChange={ handleChange }
                />
            </form>
        </div>
    )
}
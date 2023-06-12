import {useEffect, useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("count has changed to", count)
    }, [count])

    const handleClick = (e) => {
        const increase = e.target.name
        setCount(count + 1)
    }

    const handleClick1 = (e) => {
        const decrease = e.target.name
        setCount(count - 1)
    }

    return (
        <div>
            <h3>Counter</h3>
            count: {count}
            <br/>
            <button name="increase" onClick={handleClick}>+</button>
            <button name="decrease" onClick={handleClick1}>-</button>
        </div>
    )
}
import {useState} from "react";

export default function ColoredCounter() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
        if (count % 2 === 0){
            document.body.style.backgroundColor = "#add8e6";
        }
        else {
            document.body.style.backgroundColor = "#F08080";
        }
    }

    return (
        <div>
            <h3>Counter</h3>
            <p>count: {count}</p>
            <button name="increase" onClick={handleClick}>+</button>
        </div>
    )
}
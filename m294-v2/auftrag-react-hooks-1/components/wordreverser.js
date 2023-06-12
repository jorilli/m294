/* export default function Wordreverser({word}){
    return(
        <p>{word.split('').reverse().join('')}</p>
    )
}

 */
import {useState} from "react";

export default function Wordreverser(){
    const [word, setWord] = useState("")

    const handleChange = (e) => {
        const inputValue = e.target.value
        setWord(inputValue)
    }

    const handleClick = () => {
       const reverseWord = word.split('').reverse().join('')
        setWord(reverseWord)
    }

    return (
        <div>
            <h3>Wordreverser</h3>
            <input value={word} onChange={handleChange}/>
            <button onClick={handleClick}>reverse Word</button>
        </div>
    )
}
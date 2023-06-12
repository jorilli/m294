import { useState, useEffect } from "react"

export default function Jokes() {
    const [joke, setJoke] = useState(null)

    async function loadJoke() {
        const response = await fetch("https://api.chucknorris.io/jokes/random")
        const newJoke = await response.json()
        setJoke(newJoke)
    }

    useEffect(() => {
        loadJoke()
    }, [])

    return (
        <div>
            <h2>Jokes</h2>
            <button onClick={loadJoke}>New joke</button>
            { joke &&<p>{joke.value}</p> }
        </div>
    )
}

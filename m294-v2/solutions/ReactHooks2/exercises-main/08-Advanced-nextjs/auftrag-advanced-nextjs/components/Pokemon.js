import Image from "next/image"
import useSWR from "swr"
import styles from "./Pokemon.module.css"

export default function Pokemon({ name }) {
    const { data: pokemon, error } = useSWR(`/api/pokemon?name=${name}`)
    
    if (error) return <div>An error occured while loading the pokemon!</div>
    if (!pokemon) return <div>Loading...</div>

    return (
        <div className={styles.pokemon}>
            <div>
                <Image src={pokemon.hires} layout="fill" objectFit="contain" />
            </div>
            <div>
                <h2>{pokemon.name.english}</h2>
                {
                    pokemon.type.join(", ")
                }
                <p>{pokemon.description}</p>

                <table>
                    <thead>
                        <tr>
                            <th>HP</th>
                            <th>Attack</th>
                            <th>Defense</th>
                            <th>Sp. Attack</th>
                            <th>Sp. Defense</th>
                            <th>Speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{pokemon.base.HP}</td>
                            <td>{pokemon.base.Attack}</td>
                            <td>{pokemon.base.Defense}</td>
                            <td>{pokemon.base["Sp. Attack"]}</td>
                            <td>{pokemon.base["Sp. Defense"]}</td>
                            <td>{pokemon.base.Speed}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
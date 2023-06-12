import { getSuperHero, getAllSuperHeroes } from "lib/api"
import Image from "next/image"
import styles from "./id.module.css"
import {useEffect} from "react";

export default function SuperHeroPage({ hero }) {
    useEffect(() => {
        document.body.scrollTop = 0
    }, [])

    return (
        <div className={styles.superhero}>
            <h1>{hero.name}</h1>
            <h2>{hero.biography.publisher}</h2>
            <h2>{hero.biography.firstAppearance}</h2>
            <h2>{hero.connections.groupAffiliation}</h2>
            <div style={{ position: "relative", width: "420px", height: "560px"}}>
                <Image
                    src={hero.images.lg}
                    width={420}
                    height={560}
                    objectFit="contain"
                    alt={`image of ${hero.name}`}
                />
            </div>
            <section>
                <h2>Race</h2>
                <p>{hero.appearance.race}</p>

                <h2>Height</h2>
                <p>{hero.appearance.height[1]}</p>

                <h2>Weight</h2>
                <p>{hero.appearance.weight[1]}</p>

                <h2>Power stats</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Intelligence:</th>
                            <th>Strength:</th>
                            <th>Speed:</th>
                            <th>Durability:</th>
                            <th>Power:</th>
                            <th>Combat:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hero.powerstats.intelligence}</td>
                            <td>{hero.powerstats.strength}</td>
                            <td>{hero.powerstats.speed}</td>
                            <td>{hero.powerstats.durability}</td>
                            <td>{hero.powerstats.power}</td>
                            <td>{hero.powerstats.combat}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}


export async function getStaticProps(context) {
    const id = context.params.id
    const hero = await getSuperHero(id)
    return {
        props: {
            hero
        }
    }
}

export async function getStaticPaths() {
    const superheroes = await getAllSuperHeroes()
    const paths = superheroes.map((hero) => ({
        params: { id: hero.id.toString() },
    }))
    return { paths, fallback: false }
}
import Image from "next/image"
import { useState } from "react"
import styles from "./HeroCard.module.css"

export default function HeroCard({ hero }) {
    const [isMouseOver, setIsMouseOver] = useState(false)

    return (
        <article
            className={`${styles.heroCard} ${isMouseOver ? styles.hover : ""}`}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}>

            <Image
                src={hero.images.sm}
                width={160}
                height={240}
                objectFit="contain"
                alt="hero image"
            />

            { isMouseOver && <h2 className={styles.title}>{hero.name}</h2> }
        </article>
    )
}
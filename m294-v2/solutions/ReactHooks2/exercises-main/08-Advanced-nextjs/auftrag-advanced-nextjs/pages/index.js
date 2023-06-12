import Pokemon from "@/components/Pokemon";
import styles from './index.module.css';

export default function Home({superheroes}) {
    return (
        <div className={styles.index}>
            <h1>Pokemon Gallery</h1>
            <section className={styles.container}>
                <Pokemon name="Mewtwo"/>
                <Pokemon name="Mew"/>
                <Pokemon name="Gengar"/>
                <Pokemon name="Zapdos"/>
            </section>
        </div>
    )
}
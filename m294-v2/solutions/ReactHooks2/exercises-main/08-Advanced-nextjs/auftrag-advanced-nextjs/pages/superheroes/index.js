import HeroCard from "@/components/HeroCard"
import { getAllSuperHeroes } from "lib/api"
import Link from "next/link"
import styles from './index.module.css'

export default function Home({ superheroes }) {
  return (
    <div className={styles.index}>
      <h1>Superhero Gallery</h1>
      <section className={styles.container}>
        {
          superheroes.map(hero => {
            return (
              <Link key={hero.id} href={`/superheroes/${hero.id}`} passHref>
                <a>
                  <HeroCard hero={hero} />
                </a>
              </Link>
            )
          })
        }
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const superheroes = await getAllSuperHeroes()
  return {
    props: {
      superheroes
    }
  }
}

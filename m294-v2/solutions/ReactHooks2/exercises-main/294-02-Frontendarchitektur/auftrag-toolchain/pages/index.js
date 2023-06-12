import Link from "next/link"
import styles from "./index.module.css"

// IndexPage ist ein Funktion, die JSX returned
// Wir nennen solch eine Funktion einen React Component
// next.js ruft unsere Funktion (unseren Component) auf und zeigt das generierte HTML unter http://localhost:3000/ an.
export default function IndexPage() {
    return (
        <main className={styles.index}>
            <h1>Hello World!</h1>
            <img src="/nextjs-logo.svg"/>
            <Link href="/about">about</Link>
        </main>
    )
}




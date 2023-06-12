import styles from "./about.module.css"

export default function AboutPage() {
    console.log(styles)
    return (
        <main className={styles.about}>
            <h1>About page!</h1>

            <section className={styles.container}>
                <h2>JSX</h2>

                <section className={styles.content}>
                    <p>
                        It is called JSX, and it is a syntax extension to JavaScript.
                        We recommend using it with React to describe what the UI should look like.
                        JSX may remind you of a template language,
                        but it comes with the full power of JavaScript.
                    </p>
                </section>
            </section>
        </main>
    )
}

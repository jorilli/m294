import Link from "next/link"
import "./_app.css"

export default function App({ Component, pageProps }) {
    return (
        <div>
            <header>My page header</header>
            <nav>
                <ul>
                    <li><Link href="/">Index</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
            <Component {...pageProps} />
        </div>
    )
}

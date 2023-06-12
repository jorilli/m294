import "./_app.css"
import {images} from "next/dist/build/webpack/config/blocks/images";

export default function App({ Component, pageProps }) {
    return (
        <div>
            <header>
                <img src="/images/pic1.jpg"/>
                <link href="/about/about.html">about</link>
                <link href="/help/help.html">help</link>
            </ header>

            <main>
                <Component {...pageProps} />

            </main>

<footer>footer</ footer >
</div>
)
}


import "./_app.css"
import useSession from "@lib/session";

export default function App({ Component, pageProps }) {
    // Session erstellen
    const session = useSession()
    // Session zu pageProps hinzufügen
    const newPageProps = {
        ...pageProps,
        session
    }
    return (
        // Beachte: wir geben newPageProps mit, nicht pageProps
        <Component {...newPageProps} />
    )
}

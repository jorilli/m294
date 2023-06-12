import './_app.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <main className="container">
            <Component { ...{ ...pageProps } } />
        </main>
    )
}

import Navigation from "@/components/Navigation"
import { Container } from "react-bootstrap"
import { SWRConfig } from "swr"
import SSRProvider from 'react-bootstrap/SSRProvider'
import fetcher from "@/lib/fetcher"
import "bootstrap/dist/css/bootstrap.min.css"
import './_app.css'

function MyApp({ Component, pageProps }) {
    return (
        <SWRConfig value={ { fetcher } }>
            <SSRProvider>
                <Navigation/>
                <Container>
                    <Component { ...pageProps } />
                </Container>
            </SSRProvider>
        </SWRConfig>
    )
}

export default MyApp
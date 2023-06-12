import { SWRConfig } from 'swr'
import './_app.css'

const fetcher = async (url, options) => {
  const response = await fetch(url, options)
  
  if(!response.ok) {
    return Promise.reject(response)
  }

  const data = await response.json()
  return data
}

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </SWRConfig>

  )
}

export default MyApp

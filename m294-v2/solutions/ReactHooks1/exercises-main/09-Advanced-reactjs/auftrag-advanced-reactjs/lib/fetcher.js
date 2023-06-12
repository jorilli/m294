export async function fetcher(url, options) {
  const response = await fetch(url, options)
  if (!response.ok) {
    return Promise.reject(response)
  }
  return response.json()
}
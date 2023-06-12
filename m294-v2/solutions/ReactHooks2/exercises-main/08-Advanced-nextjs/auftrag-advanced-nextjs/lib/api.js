const URL = "http://localhost:3001/superheroes"

export async function getAllSuperHeroes() {
    const response = await fetch(URL)
    const superheroes = await response.json()
    return superheroes
}

export async function getSuperHero(id) {
    const response = await fetch(`${URL}/${id}`)
    const superhero = await response.json()
    return superhero
}

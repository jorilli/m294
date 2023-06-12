const URL = "http://localhost:9001/api/posts"

export async function login({email, password}){
    const response = await fetch('http://localhost:9001/authenticate', {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
    if (!response.ok) {
        return Promise.reject(response)
    }
    const data = await response.json()
    return data
}

export async function getAllPosts() {
    const response = await fetch(`${URL}`)
    if (!response.ok) {
        return Promise.reject(response)
    }
    const data = await response.json()
    return data
}

export async function getPostById(id) {
    const response = await fetch(`${URL}/${id}`)
    if (!response.ok) {
        return Promise.reject(response)
    }
    const data = await response.json()
    return data
}

export async function createPost(post, token) {
    const response = await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(post)
    })
    if (!response.ok) {
        return Promise.reject(response)
    }
    const data = await response.json()
    return data
}

export async function updatePost(post, token) {
    const response = await fetch(`${URL}/${post.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(post)
    })
    if (!response.ok) {
        return Promise.reject(response)
    }
    const data = await response.json()
    return data
}

export async function deletePost(id) {
    const response = await fetch(`${URL}/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }
    })
    if (!response.ok) {
        return Promise.reject(response)
    }
}

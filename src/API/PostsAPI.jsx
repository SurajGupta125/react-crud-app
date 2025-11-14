import axios from "axios"

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

// get 

export const getPost = () => {
    return api.get("/posts")
}

// delete

export const getDelete = (id) => {
    return api.delete(`/posts/${id}`)
}

// Add 

export const getAdd = (newPost) => {
    return api.post('/posts', newPost)
}

// Edit 

export const getEdit = (id,update) => {
    return api.put(`/posts/${id}`,update)
}
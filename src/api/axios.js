import axios from "axios"

export const api = axios.create({
    baseURL: 'https://rsbase.fanitehub.com/api/v1/'
})

export const getPosts = async () => {
    const response = await api.get('/products')
    return response.data
}

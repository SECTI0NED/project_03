import http from "./http"

export const getData = async (input) => {
    const response = await http.get(`/get-result?input=${input}`)
    return response
}

export const getInitialGrid = async () => {
    const response = await http.get(`/initial-grid`)
    return response
}
import http from "./http"

export const getData = async (input) => {
    const response = await http.get(`/get-result?input=${input}`)
    return response
}
import http from "./http"

export const getDataSingleDrone = async (input) => {
    const response = await http.get(`/single-drone?input=${input}`)
    return response
}

export const getDataTwoDrones = async (input) => {
    const response = await http.get(`/two-drones?input=${input}`)
    return response
}

export const getInitialGrid = async () => {
    const response = await http.get(`/initial-grid`)
    return response
}
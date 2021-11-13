import axios from "axios"

const BASE_URL = `http://192.168.1.189:4001/api`
// const BASE_URL = `http://localhost:4001/api`

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json"
    }
})
import axios from "axios";

const baseURL = "http://localhost:4000/api/"

const api = axios.create({
    withCredentials : true,
    baseURL,
    
})

export default api
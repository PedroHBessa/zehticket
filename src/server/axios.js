import axios from "axios"




const baseURL = "https://api.zehticket.com.br/api/"

const csrf = (method) => {
    return axios.get('https://api.zehticket.com.br/sanctum/csrf-cookie').then(response => method)
}

export const verbs = {
    get: (url) => {
        return csrf(axios.get(baseURL + url))
    },
    post: (url, data) => {
        return csrf(axios.post(baseURL + url, data))
    },
}





export default verbs;
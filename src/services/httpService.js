import axios from "axios"
import { Alert } from "../utils/alerts";
import config from './config.json'

axios.interceptors.response.use((res)=>{
    if (res.status != 200 && res.status != 201) {
        Alert("مشکل...!", res.data.message, "warning");
    }
    return res
},(error)=>{
    Alert(error.response.status, "مشکلی رخ داده است", "error");
    return Promise.reject(error)
})

const httpService = (url, method, data=null)=>{
    const tokenInfo = JSON.parse(localStorage.getItem('loginToken'))
    return axios({
        url: config.onlineApi+url,
        method,
        data,
        headers:{
            Authorization : tokenInfo ? `Bearer ${tokenInfo.token}` : null,
            "Content-Type" : "application/json"
        }
    })
}
export default httpService
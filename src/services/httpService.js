import axios from "axios"
import { Alert } from "../utils/alerts";
import config from './config.json'

export const apiPath = config.onlinePath

axios.interceptors.response.use((res)=>{
    if (res.status != 200 && res.status != 201) {
        if (typeof(res.data) == 'object') {
            let message = ""
            for (const key in res.data) {
                message = message + `${res.data[key]}`
            }
            res.data.message = message
        }
        Alert("مشکل...!", res.data.message, "warning");
    }
    return res
},(error)=>{
    console.log(error);
    Alert(error.response.status, error.response.data?.message || "مشکلی رخ داده است", "error");
    return Promise.reject(error)
})

const httpService = (url, method, data=null)=>{
    const tokenInfo = JSON.parse(localStorage.getItem('loginToken'))
    return axios({
        url: apiPath+"/api"+url,
        method,
        data,
        headers:{
            Authorization : tokenInfo ? `Bearer ${tokenInfo.token}` : null,
            "Content-Type" : "application/json"
        }
    })
}
export default httpService
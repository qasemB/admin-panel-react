export const convertDataToFormdata = (dataObj)=>{
    const formdata = new FormData()
    for (const key in dataObj) {
        formdata.append(key, dataObj[key] )
    }
    return formdata
}
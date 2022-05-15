import httpService from "./httpService"

export const getCategoriesService = (id=null)=>{
    return httpService(`/admin/categories${id ? `?parent=${id}` : ""}`, 'get');
}
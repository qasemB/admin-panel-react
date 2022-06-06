import httpService from "./httpService"

export const getCategoryAttrsService = (categoryId)=>{
    return httpService(`/admin/categories/${categoryId}/attributes`, 'get')
}
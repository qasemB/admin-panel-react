import httpService from "./httpService"

export const getCategoryAttrsService = (categoryId)=>{
    return httpService(`/admin/categories/${categoryId}/attributes`, 'get')
}

export const addCategoryAttrService = (categoryId, data)=>{
    return httpService(`/admin/categories/${categoryId}/attributes`, 'post', data)
}

export const editCategoryAttrService = (attrId, data)=>{
    return httpService(`/admin/categories/attributes/${attrId}`, 'put', data)
}

export const deleteCategoryAttrService = (attrId)=>{
    return httpService(`/admin/categories/attributes/${attrId}`, 'delete')
}


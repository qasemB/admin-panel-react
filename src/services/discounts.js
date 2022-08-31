import httpService from "./httpService";

export const getAllDiscountsService = () => {
  return httpService("/admin/discounts", "get");
};

export const addNewDiscountService = (data)=>{
  return httpService("/admin/discounts", 'post', data)
}

export const deleteDiscountService = (discountId)=>{
  return httpService(`/admin/discounts/${discountId}`, 'delete')
}

export const updateDiscountService = (discountId, data)=>{
  return httpService(`/admin/discounts/${discountId}`, 'put', data)
}
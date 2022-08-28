import httpService from "./httpService";

export const getAllDiscountsService = () => {
  return httpService("/admin/discounts", "get");
};

export const addNewDiscountService = (data)=>{
  return httpService("/admin/discounts", 'post', data)
}
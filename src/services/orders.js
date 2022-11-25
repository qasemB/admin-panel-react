import httpService from "./httpService";

export const getAllPaginatedOrdersService = (page, countOnPage, searchChar) => {
    return httpService(`/admin/orders?page=${page}&count=${countOnPage}&searchChar=${searchChar}`, "get");
  };
  
  export const addNewOrderService = (data) => {
    return httpService("/admin/orders", "post", data);
  };
  
  export const getSinglrOrderService = (orderId)=>{
    return httpService(`/admin/orders/${orderId}`, "get")
  }
  
  export const deleteOrderService = (orderId) => {
    return httpService(`/admin/orders/${orderId}`, "delete");
  };
  
  export const getOrdersStatisticsService = () => {
    return httpService(`/admin/orders/orders_statistics`, "get");
  };
  
  export const getThisYearOrdersService = () => {
    return httpService(`/admin/orders/this_year_orders`, "get");
  };
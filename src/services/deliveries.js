import httpService from "./httpService";

export const getAllDeliveriesService = () => {
  return httpService("/admin/deliveries", "get");
};

export const getOneDeliveryService = (deliveryId) => {
  return httpService(`/admin/deliveries/${deliveryId}`, "get");
};

export const addNewDeliveryService = (data)=>{
  return httpService("/admin/deliveries", 'post', data)
}

export const deleteDeliveryService = (deliveryId)=>{
  return httpService(`/admin/deliveries/${deliveryId}`, 'delete')
}

export const updateDeliveryService = (deliveryId, data)=>{
  return httpService(`/admin/deliveries/${deliveryId}`, 'put', data)
}
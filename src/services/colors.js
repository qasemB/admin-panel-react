import httpService from "./httpService";

export const getAllColorsService = () => {
  return httpService("/admin/colors", "get");
};

export const addNewColorService = (data) => {
  return httpService("/admin/colors", "post", data);
};

export const editColorService = (colorId, data)=>{
  return httpService(`/admin/colors/${colorId}`, "put", data);
}

export const deleteColorService = (colorId)=>{
  return httpService(`/admin/colors/${colorId}`, "delete");
}

import httpService from "./httpService";

export const getAllBrandsService = () => {
  return httpService("/admin/brands", "get");
};

export const addNewBrandService = (data) => {
  if (data.logo) {
    let formdata = new FormData();
    formdata.append("original_name", data.original_name);
    formdata.append("persian_name", data.persian_name);
    formdata.append("descriptions", data.descriptions);
    formdata.append("logo", data.logo);
    data = formdata;
  }
  return httpService("/admin/brands", "post", data);
};

export const editBrandService = (brandId, data)=>{
  if (data.logo) {
    let formdata = new FormData();
    formdata.append("original_name", data.original_name);
    formdata.append("persian_name", data.persian_name);
    formdata.append("descriptions", data.descriptions);
    formdata.append("logo", data.logo);
    data = formdata;
  }
  return httpService(`/admin/brands/${brandId}`, "post", data);
}

export const deleteBrandService = (brandId)=>{
  return httpService(`/admin/brands/${brandId}`, "delete");
}

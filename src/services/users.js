import httpService from "./httpService";

export const getAllPermissionsService = () => {
  return httpService("/admin/permissions", "get");
};

export const getAllRolesService = () => {
  return httpService("/admin/roles", "get");
};

export const addNewRoleService = (data) => {
  return httpService("/admin/roles", "post", data);
};

export const getSinglrRoleService = (roleId)=>{
  return httpService(`/admin/roles/${roleId}`, "get")
}

export const editRoleService = (roleId, data)=>{
  return httpService(`/admin/roles/${roleId}`, "put", data)
}

export const deleteRoleService = (roleId)=>{
  return httpService(`/admin/roles/${roleId}`, "delete")
}

export const editRolePermissionsService = (roleId, data)=>{
  return httpService(`/admin/roles/${roleId}/permissions`, "put", data)
}
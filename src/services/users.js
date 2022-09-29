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

export const getAllUsersService = () => {
  return httpService("/admin/users", "get");
};

export const getAllPaginatedUsersService = (page, countOnPage, searchChar) => {
  return httpService(`/admin/users?page=${page}&count=${countOnPage}&searchChar=${searchChar}`, "get");
};

export const addNewUserService = (data) => {
  return httpService("/admin/users", "post", data);
};

export const getSinglrUserService = (userId)=>{
  return httpService(`/admin/users/${userId}`, "get")
}

export const editUserService = (userId, data) => {
  return httpService(`/admin/users/${userId}`, "put", data);
};

export const deleteUserService = (userId) => {
  return httpService(`/admin/users/${userId}`, "delete");
};
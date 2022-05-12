import httpService from "./httpService";

export const loginService = (values) => {
  return httpService("/auth/login", "post", {
    ...values,
    remember: values.remember ? 1 : 0,
  });
};

export const logoutService = ()=>{
    return httpService("/auth/logout", "get")
}

export const getUserService = ()=>{
    return httpService("/auth/user", "get")
}

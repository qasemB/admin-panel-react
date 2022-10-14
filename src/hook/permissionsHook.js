import { useSelector } from "react-redux";

export const useHasPermission = (pTitle)=>{
    const user = useSelector(state=>state.userReducer.data)
    const roles = user.roles;
    let permissions = []
    for (const role of roles)  permissions = [...permissions, ...role.permissions]
    return permissions.findIndex(p=>p.title.includes(pTitle)) > -1
}
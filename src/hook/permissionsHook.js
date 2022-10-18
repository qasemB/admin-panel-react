import { useSelector } from "react-redux";

export const useHasPermission = (pTitle)=>{
    const user = useSelector(state=>state.userReducer.data)
    const roles = user.roles;
    let permissions = []
    for (const role of roles)  permissions = [...permissions, ...role.permissions]
    const isAdmin = roles.findIndex(r=>r.title === "admin") > -1
    console.log(isAdmin);
    return isAdmin || 
            (typeof(pTitle) === "object" 
            ? hasOneOfPerm(permissions, pTitle) 
            : permissions.findIndex(p=>p.title.includes(pTitle)) > -1)
}

const hasOneOfPerm = (permissions, pTitles)=>{
    for (const pTitle of pTitles) {
        if(permissions.findIndex(p=>p.title.includes(pTitle)) > -1) return true
    }
    return false
}
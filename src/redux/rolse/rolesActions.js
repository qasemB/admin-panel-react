import { getUserService } from "../../services/auth"
import { RECEIVE_ROLES_ERROR, RECEIVE_ROLES_RESPONSE, SEND_ROLES_REQUEST } from "./rolesTypes"

export const sendRolesRequest = ()=>{
    return {
        type: SEND_ROLES_REQUEST
    }
}

export const receiveRolesResponse = (data)=>{
    return {
        type: RECEIVE_ROLES_RESPONSE,
        payload: data
    }
}

export const receiveRolesError = (error)=>{
    return {
        type: RECEIVE_ROLES_ERROR,
        payload: error
    }
}


// export const getRolesActionRedux = ()=>{
//     return (dispatch, state)=>{
//         dispatch(sendRolesRequest())
//         getUserService().then(res=>{
//             console.log(res.data.roles);
//             dispatch(receiveRolesResponse(res.data.roles));
//         }).catch(error=>{
//             dispatch(receiveRolesError(error.message))
//         })
//     }
// }
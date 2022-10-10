import { getUserService } from "../../services/auth"
import { RECEIVE_USER_ERROR, RECEIVE_USER_RESPONSE, SEND_USER_REQUEST } from "./userTypes"

export const sendUserRequest = ()=>{
    return {
        type: SEND_USER_REQUEST
    }
}

export const receiveUserResponse = (data)=>{
    return {
        type: RECEIVE_USER_RESPONSE,
        payload: data
    }
}

export const receiveUserError = (error)=>{
    return {
        type: RECEIVE_USER_ERROR,
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
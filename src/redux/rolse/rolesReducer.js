import { RECEIVE_ROLES_ERROR, RECEIVE_ROLES_RESPONSE, SEND_ROLES_REQUEST } from "./rolesTypes"

const initialState = {
    loading: false,
    roles: [],
    error: ""
}

const rolesReducer = (state=initialState, action)=>{
    switch (action.type){
        case SEND_ROLES_REQUEST:
            return {...state, loading: true}
        case RECEIVE_ROLES_RESPONSE:
            return {loading: false, roles: action.payload, error: ""}
        case RECEIVE_ROLES_ERROR:
            return {loading: false, roles: [], error: action.payload}
        default:
            return state
    }
}

export default rolesReducer;
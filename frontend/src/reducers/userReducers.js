import { 
    GET_USER_FAIL,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_RESET,
    GET_USER_REGISTER_REQUEST,
    GET_USER_REGISTER_SUCCESS,
    GET_USER_REGISTER_FAIL,
 } from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                loading: true
            }
        case GET_USER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                success: true
            }
        case GET_USER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case GET_USER_RESET:
            return {}
    
        default:
            return state;
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_REGISTER_REQUEST:
            return {
                loading: true
            }
        case GET_USER_REGISTER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                success: true
            }
        case GET_USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
    
        default:
            return state;
    }
}
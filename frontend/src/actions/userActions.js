import axios from "axios"
import { 
    GET_USER_FAIL,
    GET_USER_REGISTER_FAIL, 
    GET_USER_REGISTER_REQUEST, 
    GET_USER_REGISTER_SUCCESS, 
    GET_USER_REQUEST,
    GET_USER_RESET,
    GET_USER_SUCCESS
} from "../constants/userConstants"

export const createUser = (name, email, password) => (async(dispatch) => {
    try {
        dispatch({type: GET_USER_REGISTER_REQUEST})

    const config = {
        headers: {
            "Content-type":"application/json"
        }
       
    }

    const {data} = await axios.post("/users/register", {name, email, password}, config)

    dispatch({
        type: GET_USER_REGISTER_SUCCESS,
        payload: data
    })
    dispatch({
        type: GET_USER_SUCCESS,
        payload: data
    })

    localStorage.setItem("share-cure-UserInfo", JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: GET_USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    
})

export const authUser = (email, password) => (async(dispatch) => {
    try {
        dispatch({type: GET_USER_REQUEST})

    const config = {
        "Content-type":"application/json"
    }

    const {data} = await axios.post("/users/login", {email, password}, config)

    dispatch({
        type: GET_USER_SUCCESS,
        payload: data
    })

    localStorage.setItem("share-cure-UserInfo", JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: GET_USER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    
})

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("share-cure-UserInfo")
    dispatch({type: GET_USER_RESET})
    
}
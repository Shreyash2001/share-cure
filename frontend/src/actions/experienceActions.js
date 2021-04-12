import axios from "axios"
import { CREATE_EXPERIENCE_FAIL, CREATE_EXPERIENCE_REQUEST, CREATE_EXPERIENCE_SUCCESS, GET_EXPERIENCE_FAIL, GET_EXPERIENCE_REQUEST, GET_EXPERIENCE_SUCCESS } from "../constants/experienceConstants"

export const getAllExperiences = () => (async(dispatch) => {
    try {
        dispatch({type: GET_EXPERIENCE_REQUEST})

    const config = {
        headers: {
            "Content-type":"application/json"
        }
    }

    const {data} = await axios.get("/experiences/all", config)

    dispatch({
        type: GET_EXPERIENCE_SUCCESS,
        payload: data
    })
    } catch (error) {
        dispatch({
            type: GET_EXPERIENCE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    
})

export const createExperience = (title, about, description, image, link, tag) => (async(dispatch, getState) => {
    try {
        dispatch({type: CREATE_EXPERIENCE_REQUEST})

       const {userLogin:{userInfo}} = getState()
        console.log(userInfo.token)
    const config = {
        headers: {
            "Content-type":"application/json",
            Authorization: `Bearer ${userInfo.token}`
            
        }
    }

     await axios.post("/experiences/create-experience", {title, about, description, image, link, tag}, config)

    dispatch({
        type: CREATE_EXPERIENCE_SUCCESS,
    })
    } catch (error) {
        dispatch({
            type: CREATE_EXPERIENCE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    
})
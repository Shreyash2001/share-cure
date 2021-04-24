import axios from "axios"
import { 
    CREATE_EXPERIENCE_FAIL, 
    CREATE_EXPERIENCE_REQUEST, 
    CREATE_EXPERIENCE_SUCCESS,  
    GET_EXPERIENCE_BYID_FAIL, 
    GET_EXPERIENCE_BYID_REQUEST, 
    GET_EXPERIENCE_BYID_SUCCESS, 
    GET_EXPERIENCE_COMMENT_FAIL, 
    GET_EXPERIENCE_COMMENT_REQUEST, 
    GET_EXPERIENCE_COMMENT_SUCCESS, 
    GET_EXPERIENCE_EMOTIONAL_FAIL, 
    GET_EXPERIENCE_EMOTIONAL_REQUEST, 
    GET_EXPERIENCE_EMOTIONAL_SUCCESS, 
    GET_EXPERIENCE_FAIL, 
    GET_EXPERIENCE_HAPPY_FAIL, 
    GET_EXPERIENCE_HAPPY_REQUEST, 
    GET_EXPERIENCE_HAPPY_SUCCESS, 
    GET_EXPERIENCE_LOVE_FAIL, 
    GET_EXPERIENCE_LOVE_REQUEST, 
    GET_EXPERIENCE_LOVE_SUCCESS, 
    GET_EXPERIENCE_REQUEST, 
    GET_EXPERIENCE_SUCCESS 
    } from "../constants/experienceConstants"

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


export const getExperienceById = (id) => (async(dispatch) => {
    try {
        dispatch({type: GET_EXPERIENCE_BYID_REQUEST})

    const config = {
        headers: {
            "Content-type":"application/json"
        }
    }

    const {data} = await axios.get(`/experiences/user-experience/${id}`, config)

    dispatch({
        type: GET_EXPERIENCE_BYID_SUCCESS,
        payload: data
    })
    } catch (error) {
        dispatch({
            type: GET_EXPERIENCE_BYID_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    
})

export const createExperience = (title, about, description, image, link, tag) => (async(dispatch, getState) => {
    try {
        dispatch({type: CREATE_EXPERIENCE_REQUEST})

       const {userLogin:{userInfo}} = getState()

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

export const getExperienceLovely = () => (async(dispatch) => {
    try {
        dispatch({type: GET_EXPERIENCE_LOVE_REQUEST})

    const config = {
        headers: {
            "Content-type":"application/json"
        }
    }

    const {data} = await axios.get(`/experiences/love`, config)

    dispatch({
        type: GET_EXPERIENCE_LOVE_SUCCESS,
        payload: data
    })
    } catch (error) {
        dispatch({
            type: GET_EXPERIENCE_LOVE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    
})

export const getExperienceHappy = () => (async(dispatch) => {
    try {
        dispatch({type: GET_EXPERIENCE_HAPPY_REQUEST})

    const config = {
        headers: {
            "Content-type":"application/json"
        }
    }

    const {data} = await axios.get(`/experiences/happy`, config)

    dispatch({
        type: GET_EXPERIENCE_HAPPY_SUCCESS,
        payload: data
    })
    } catch (error) {
        dispatch({
            type: GET_EXPERIENCE_HAPPY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    
})

export const getExperienceEmotional = () => (async(dispatch) => {
    try {
        dispatch({type: GET_EXPERIENCE_EMOTIONAL_REQUEST})

    const config = {
        headers: {
            "Content-type":"application/json"
        }
    }

    const {data} = await axios.get(`/experiences/emotional`, config)

    dispatch({
        type: GET_EXPERIENCE_EMOTIONAL_SUCCESS,
        payload: data
    })
    } catch (error) {
        dispatch({
            type: GET_EXPERIENCE_EMOTIONAL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    
})

export const createExperienceComment = (id, comment) => (async(dispatch, getState) => {
    try {
        dispatch({type: GET_EXPERIENCE_COMMENT_REQUEST})
        const {userLogin: {userInfo}} = getState()

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`
        }
    }

     await axios.post(`/experiences/comment/${id}`, {comment}, config)

    dispatch({
        type: GET_EXPERIENCE_COMMENT_SUCCESS,
    })
    } catch (error) {
        dispatch({
            type: GET_EXPERIENCE_COMMENT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    
})


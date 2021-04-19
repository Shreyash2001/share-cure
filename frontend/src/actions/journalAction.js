import axios from "axios"
import { CREATE_JOURNAL_FAIL, CREATE_JOURNAL_REQUEST, CREATE_JOURNAL_SUCCESS } from "../constants/journalConstants"
import { GET_USER_JOURNAL_FAIL, GET_USER_JOURNAL_REQUEST, GET_USER_JOURNAL_SUCCESS } from "../constants/userConstants"

export const createJournal = (title, description, tag) => (async(dispatch, getState) => {
    try {
        dispatch({type: CREATE_JOURNAL_REQUEST})

        const {userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

    const {data} = await axios.post("/users/create-journal", {title, description, tag}, config)

    dispatch({
        type:CREATE_JOURNAL_SUCCESS,
        payload: data
    })

    } catch (error) {
        dispatch({
            type: CREATE_JOURNAL_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
})


export const getAllJournals = () => (async(dispatch, getState) => {
    try {
        dispatch({type: GET_USER_JOURNAL_REQUEST})

        const {userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

    const {data} = await axios.get("/users/all-journals", config)

    dispatch({
        type:GET_USER_JOURNAL_SUCCESS,
        payload: data
    })

    } catch (error) {
        dispatch({
            type: GET_USER_JOURNAL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
})
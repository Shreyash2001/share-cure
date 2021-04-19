import { CREATE_JOURNAL_REQUEST, CREATE_JOURNAL_FAIL, CREATE_JOURNAL_SUCCESS, CREATE_JOURNAL_RESET } from "../constants/journalConstants"
import { GET_USER_JOURNAL_FAIL, GET_USER_JOURNAL_REQUEST, GET_USER_JOURNAL_SUCCESS } from "../constants/userConstants"

export const journalReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_JOURNAL_REQUEST:
            return {
                loading: true
            }
        case CREATE_JOURNAL_SUCCESS:
            return {
                loading: false,
                success: true,
                createdData: action.payload
            }
        case CREATE_JOURNAL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CREATE_JOURNAL_RESET:
            return {}
    
        default:
            return state
    }
}

export const allJournalsReducer = (state = {journals: []}, action) => {
    switch (action.type) {
        case GET_USER_JOURNAL_REQUEST:
            return {
                loading: true
            }
        case GET_USER_JOURNAL_SUCCESS:
            return {
                loading: false,
                journals: action.payload
            }
        case GET_USER_JOURNAL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
    
        default:
            return state
    }
}
import { 
    CREATE_EXPERIENCE_FAIL,
    CREATE_EXPERIENCE_REQUEST,
    CREATE_EXPERIENCE_SUCCESS,
    EXPERIENCE_RESET,
    GET_EXPERIENCE_FAIL, 
    GET_EXPERIENCE_REQUEST, 
    GET_EXPERIENCE_SUCCESS 
} from "../constants/experienceConstants"

export const getExperienceReducer = (state = {allExperiences: []}, action) => {
    switch (action.type) {
        case GET_EXPERIENCE_REQUEST:
            return {
                loading: true
            }
        case GET_EXPERIENCE_SUCCESS:
            return {
                loading: false,
                allExperiences: action.payload
            }
        case GET_EXPERIENCE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
            
        default:
            return state
    }
}

export const createExperienceReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_EXPERIENCE_REQUEST:
            return {
                loading: true
            }
        case CREATE_EXPERIENCE_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case CREATE_EXPERIENCE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case EXPERIENCE_RESET:
            return {}
            
        default:
            return state
    }
}
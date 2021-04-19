import { 
    CREATE_EXPERIENCE_FAIL,
    CREATE_EXPERIENCE_REQUEST,
    CREATE_EXPERIENCE_SUCCESS,
    EXPERIENCE_RESET,
    GET_EXPERIENCE_BYID_FAIL,
    GET_EXPERIENCE_BYID_REQUEST,
    GET_EXPERIENCE_BYID_SUCCESS,
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


export const getExperienceByIdReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_EXPERIENCE_BYID_REQUEST:
            return {
                loading: true
            }
        case GET_EXPERIENCE_BYID_SUCCESS:
            return {
                loading: false,
                experience: action.payload
            }
        case GET_EXPERIENCE_BYID_FAIL:
            return {
                loading: false,
                error: action.payload
            } 
        default:
            return state
    }
}

export const getExperienceLoveReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_EXPERIENCE_LOVE_REQUEST:
            return {
                loading: true
            }
        case GET_EXPERIENCE_LOVE_SUCCESS:
            return {
                loading: false,
                experience: action.payload
            }
        case GET_EXPERIENCE_LOVE_FAIL:
            return {
                loading: false,
                error: action.payload
            } 
        default:
            return state
    }
}

export const getExperienceHappyReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_EXPERIENCE_HAPPY_REQUEST:
            return {
                loading: true
            }
        case GET_EXPERIENCE_HAPPY_SUCCESS:
            return {
                loading: false,
                experience: action.payload
            }
        case GET_EXPERIENCE_HAPPY_FAIL:
            return {
                loading: false,
                error: action.payload
            } 
        default:
            return state
    }
}

export const getExperienceEmotionalReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_EXPERIENCE_EMOTIONAL_REQUEST:
            return {
                loading: true
            }
        case GET_EXPERIENCE_EMOTIONAL_SUCCESS:
            return {
                loading: false,
                experience: action.payload
            }
        case GET_EXPERIENCE_EMOTIONAL_FAIL:
            return {
                loading: false,
                error: action.payload
            } 
        default:
            return state
    }
}
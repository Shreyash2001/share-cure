import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { 
    userLoginReducer, 
    userRegisterReducer
 } from "./reducers/userReducers"
import { createExperienceReducer, getExperienceByIdReducer, getExperienceReducer, getExperienceLoveReducer, getExperienceHappyReducer, getExperienceEmotionalReducer } from "./reducers/experienceReducers"
import {allJournalsReducer, journalReducer} from "./reducers/journalReducer"

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    experiences: getExperienceReducer,
    createdExperience: createExperienceReducer,
    experienceById: getExperienceByIdReducer,
    lovelyExperience: getExperienceLoveReducer,
    happyExperience: getExperienceHappyReducer,
    emotionalExperience: getExperienceEmotionalReducer,
    createdJournal: journalReducer,
    allJournals: allJournalsReducer
})

const userInfoFromStorage = localStorage.getItem("share-cure-UserInfo") ? JSON.parse(localStorage.getItem("share-cure-UserInfo")) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage} 
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
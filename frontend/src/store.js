// import { applyMiddleware, combineReducers, compose, createStore } from "redux"
// import countReducer from "./slices/countReducer"
// import duplicatecountReducer from "./slices/duplicateCountReducer"
// import { thunk } from "redux-thunk"
// const rootReducer = combineReducers({
//     countReducer : countReducer,
//     duplicatecountReducer : duplicatecountReducer
// })


// const middleware = compose(applyMiddleware(thunk))

// export const store = createStore(rootReducer,middleware)

import { configureStore } from "@reduxjs/toolkit";
import userSlice from '@/slices/userSlice'

export const store = configureStore({
    reducer : {
        userSlice : userSlice
    }
})
//using thunk over here in store

import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer } from "./reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    app:reducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))
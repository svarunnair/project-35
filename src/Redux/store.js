import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { dataReducer } from "./Data/reducer";



const root=combineReducers({
    auth:'',
    data:dataReducer
})

export const store=legacy_createStore(root,applyMiddleware(thunk))
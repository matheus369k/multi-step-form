import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { planReducer } from "./plan/reducer";

export const rootReducer = combineReducers({ userReducer, planReducer });

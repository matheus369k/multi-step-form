// Tools
import { combineReducers } from "redux";

// Reducers
import { userReducer } from "./user/reducer";
import { planReducer } from "./plan/reducer";
import { AddOnsReducer } from "./add-ons/reducer";

export const rootReducer = combineReducers({ userReducer, planReducer, AddOnsReducer });

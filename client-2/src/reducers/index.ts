import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer";
import loggerReducer from "./logsReducer"

const loggerReducers = combineReducers({
    loginReducer,
    loggerReducer
})

export default loggerReducers
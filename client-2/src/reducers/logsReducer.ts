import { createSlice } from "@reduxjs/toolkit";
import { getLogsAction } from "../actions/loginActions";
import { LogsApi } from "../store/types";

const initialState: LogsApi = {
    loadingLogs: false,
    errorLogs: "",
    dataLogs: null
}

const loggerReducer = createSlice({
    name: "logger",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getLogsAction.pending, (state) => {
            state.loadingLogs = true;
            state.errorLogs = ""
        })
        .addCase(getLogsAction.fulfilled, (state, action) => {
            state.dataLogs = action.payload
            state.loadingLogs = false
            state.errorLogs = ""
        })
        .addCase(getLogsAction.rejected, (state) => {
            state.loadingLogs = false
            state.errorLogs = "Error through logger access"
        })
    },
    reducers: {
        resetLoggerError: (state) => {state.errorLogs = ""},
        resetLoggerState: (state) => {state.dataLogs = null}
    }
})

export const {resetLoggerError,resetLoggerState} = loggerReducer.actions

export default loggerReducer.reducer
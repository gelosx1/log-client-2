import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { loginActions } from "../actions/loginActions"
import { InitialStateLoginData, LoginData } from "../store/types"

const initialState: InitialStateLoginData = {
    loginLoading: false,
    loginError: "",
    loginData: null
}

const loginReducer = createSlice({
    name: "login",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(loginActions.pending, (state) => {
            state.loginLoading = true;
            state.loginError = ""
        })
        .addCase(loginActions.fulfilled, (state, action: PayloadAction<LoginData>) => {
            state.loginLoading = false;
            state.loginError = "";
            state.loginData = action.payload
        })
        .addCase(loginActions.rejected, (state) => {
            state.loginLoading = false;
            state.loginError = "Error! Login failed."
        })
    },
    reducers: {
        resetLoginState: (state) => {
            state.loginData = null;
            state.loginLoading = false;
            state.loginError = ""
        }
    }
})
export const {resetLoginState} = loginReducer.actions
export default loginReducer.reducer
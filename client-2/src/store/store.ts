import { configureStore } from "@reduxjs/toolkit";
import loggerReducers from '../reducers';

const store = configureStore({
    reducer: loggerReducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
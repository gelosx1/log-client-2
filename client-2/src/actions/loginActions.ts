import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { isEmpty } from "lodash"
import { Credentials, LogsTime } from "../store/types"
import { url } from "../utils/constants"

export const loginActions = createAsyncThunk(
    "loginAction",
    async (credentials: Credentials) => {
        if(!isEmpty(credentials)) {
            const config = {
                url: `${url}/login`,
                method: "post",
                headers: {
                    Authorization: `Basic ${btoa(`${credentials.login}:${credentials.password}`)}`,
                    ContentType: "application/json"
                },
                data: {}
            }
            try {
                const response = await axios.request(config)
                console.log(response);
                return response.data 
            } catch (e) {
                console.error("Something went wrong during login process");
                throw e
            }
        } else {
            throw new Error("Credentials not exist!")
        }

    }
)

export const getLogsAction = createAsyncThunk("logs",
async (logsTime: LogsTime) => {
    const { startDate, startTime, endDate, endTime } = logsTime;
    const config = {
        url: `${url}/accident-logs?startDate=${startDate}&startTime=${startTime}&endDate=${endDate}&endTime=${endTime}`,
        method: "get",
        headers: {
            ContentType: "application/json"
        }
    }
    try {
        const response = await axios.request(config)
        console.log(response);
        return response.data
        
    } catch (e) {
        console.error("Something went wrong");
        throw new Error("wrong user data!")
    }
}
)
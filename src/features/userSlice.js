import {createSlice} from "@reduxjs/toolkit";
import request from "../utils/auth";


export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")),
        tokens: JSON.parse(localStorage.getItem("tokens")),
    },
    reducers: {
        login: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            state.user = JSON.parse(localStorage.getItem("user"))
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user")
            localStorage.removeItem("tokens")
        },
        refresh: (state, action) => {
            localStorage.setItem("tokens", JSON.stringify(action.payload.tokens))
            state.tokens = JSON.parse(localStorage.getItem("tokens"))
        }
    }
})

export const {login, logout, refresh} = userSlice.actions;

export const selectUser = (state) => state.user.user
export const selectTokens = (state) => state.user.tokens
export default userSlice.reducer;
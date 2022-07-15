import {createAction} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";

const userLogin = createAction('USER_LOGIN');
const userLogout = createAction('USER_LOGOUT');
const tokenRefresh = createAction('TOKEN_REFRESH')

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null ,
    tokens: localStorage.getItem("tokens") ? JSON.parse(localStorage.getItem("tokens")) : null
}
const userReducer = createReducer ( initialState, (builder) => {
    builder
        .addCase('USER_LOGIN', (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            state.user = JSON.parse(localStorage.getItem("user"))
            localStorage.setItem("tokens", JSON.stringify(action.payload.tokens))
            state.tokens = JSON.parse(localStorage.getItem("tokens"))
        })
        .addCase('USER_LOGOUT', (state) => {
            state.user = null;
            localStorage.removeItem("user")
            localStorage.removeItem("tokens")
        })
        .addCase('TOKEN_REFRESH', (state, action) => {
            localStorage.setItem("tokens", JSON.stringify(action.payload))
            state.tokens = JSON.parse(localStorage.getItem("tokens"))
        })
})

export {userLogin, userLogout, tokenRefresh};
export const selectUser = (state) => state.user.user
export const selectTokens = (state) => state.user.tokens
export default userReducer;
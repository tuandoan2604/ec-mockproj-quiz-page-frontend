import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  tokens: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action?.payload.user
      state.tokens = action?.payload.tokens
    },
  },
})

export const { signIn } = authSlice.actions
export default authSlice.reducer

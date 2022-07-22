import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  results: [],
}

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    fetchResult: (state, action) => {
      state.results = [...action.payload]
    },
  },
})

export const { fetchResult } = resultSlice.actions
export default resultSlice.reducer

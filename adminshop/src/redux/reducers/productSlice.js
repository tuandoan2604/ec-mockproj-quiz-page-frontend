import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProduct: (state, action) => {
      state.products = action.payload.data.result
    },
  },
})

export const { fetchProduct } = productSlice.actions
export default productSlice.reducer

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
export const fetchSlider = createAsyncThunk(
  'slider/fetchSlider',
  async (data: any, thunkAPI) => {
    console.log('fetchSlider');
  },
);

const categorySlice = createSlice({
  name: 'Slider',
  initialState: {
    items: [],
  },
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchSlider.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchSlider.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;

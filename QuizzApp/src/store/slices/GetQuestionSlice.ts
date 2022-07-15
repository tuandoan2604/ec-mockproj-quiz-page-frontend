import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import QuestionService from '../../config/question';

export const fetchAsyncQuestionData = createAsyncThunk(
  'auth/fetchAsyncQuestionData',
  async (data: any, thunkAPI) => {
    const response = await QuestionService.list(data);
    console.log('response data');
    return response.data;
  },
);

const getQuestionSlice = createSlice({
  name: 'Question',
  initialState: {
    question: null,
    score: 0,
  },
  reducers: {
    addQuestion(state, action) {
      state.question = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAsyncQuestionData.fulfilled, (state, action) => {
        console.log('test question');
      })
      .addCase(fetchAsyncQuestionData.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

const {actions, reducer} = getQuestionSlice;

export const {addQuestion} = actions;
export default reducer;

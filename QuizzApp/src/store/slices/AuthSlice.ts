import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AuthService from '../../config/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchAsyncLogin = createAsyncThunk(
  'auth/fetchAsyncRegister',
  async (data: any, thunkAPI) => {
    const response = await AuthService.login(data);
    return response.data;
  },
);

export const fetchAsyncRegister = createAsyncThunk(
  'auth/fetchAsyncRegister',
  async (data: any, thunkAPI) => {
    console.log('fetch register');
  },
);

const authSlice = createSlice({
  name: 'Auth',
  initialState: {
    payload: [],
    data: [],
    isLogin: false,
  },

  reducers: {
    LogOut: (state, action) => {
      AsyncStorage.removeItem('token');
      return {
        ...state,
        isLogin: false,
      };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAsyncLogin.fulfilled, (state, action) => {
        const payload = action.payload;
        const {tokens} = action.payload.tokens.access.token;
        console.log('tokens', action.payload.tokens.access.token);

        AsyncStorage.setItem('tokens', tokens);

        return {
          ...state,
          payload: payload,
          isLogin: true,
        };
      })
      .addCase(fetchAsyncLogin.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {LogOut} = authSlice.actions;
export default authSlice.reducer;

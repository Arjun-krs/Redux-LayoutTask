import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';



export const signupAction = createAsyncThunk(
    'post/signupAction',
    async (dataObject, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://18.118.43.220/boomAPI/boom/api/v1/merchant', dataObject);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
  );

  export const userLoginAction = createAsyncThunk(
    'post/userLoginAction',
    async (dataObject, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://18.118.43.220/boomAPI/boom/api/v1/user/login', dataObject);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
  );
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signupAction = createAsyncThunk(
  'post/signupAction',
  async (dataObject, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_WEB_LOGIN}/merchant`, dataObject);
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
      const response = await axios.post(`${import.meta.env.VITE_API_WEB_LOGIN}/user/login`, dataObject);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const loginAction = createAsyncThunk(
  "login/loginAction", 
  async (formData) => { 
    try {
      const response = await axios.post( 
        `${import.meta.env.VITE_API_WEB_URL}/userdata`, 
        formData 
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


export const getAction = createAsyncThunk(
  "get/getAction", 
  async () => { 
    try {
      const response = await axios.get( 
        `${import.meta.env.VITE_API_WEB_URL}/userdata` 
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


export const deleteAction = createAsyncThunk(
  "delete/deleteAction", 
  async (userId) => { 
    try {
      await axios.delete( 
        `${import.meta.env.VITE_API_WEB_URL}/userdata/${userId}` 
      );
      return userId;
    } catch (error) {
      throw error;
    }
  }
);



export const updateAction = createAsyncThunk(
  "update/updateAction", 
  async (formData) => { 
    try {
      const response = await axios.put( 
        `${import.meta.env.VITE_API_WEB_URL}/userdata/${formData.id}`, 
        formData
      );
      return response.data;
    } catch (error) {
      throw error; 
    }
  }
);


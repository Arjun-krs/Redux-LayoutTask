import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk action to handle login
export const loginAction = createAsyncThunk(
  "login/loginAction", // Action type
  async (formData) => { // Async function to handle login
    try {
      const response = await axios.post( // Making a POST request to the API
        `${import.meta.env.VITE_API_WEB_URL}/userdata`, // API endpoint URL
        formData // Data to send in the request body
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Async thunk action to fetch user data
export const getAction = createAsyncThunk(
  "get/getAction", // Action type
  async () => { // Async function to fetch data
    try {
      const response = await axios.get( // Making a GET request to the API
        `${import.meta.env.VITE_API_WEB_URL}/userdata` // API endpoint URL
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Async thunk action to delete a user
export const deleteAction = createAsyncThunk(
  "delete/deleteAction", // Action type
  async (userId, { dispatch }) => { // Async function to handle delete
    try {
      await axios.delete( // Making a DELETE request to the API
        `${import.meta.env.VITE_API_WEB_URL}/userdata/${userId}` // API endpoint URL with userId
      );
      return userId;
    } catch (error) {
      throw error;
    }
  }
);

// Async thunk action to update user data
export const updateAction = createAsyncThunk(
  "update/updateAction", // Action type
  async (formData) => { // Async function to handle update
    try {
      const response = await axios.put( // Making a PUT request to the API
        `${import.meta.env.VITE_API_WEB_URL}/userdata/${formData.id}`, // API endpoint URL with userId
        formData // Data to send in the request body
      );
      return response.data;
    } catch (error) {
      throw error; 
    }
  }
);


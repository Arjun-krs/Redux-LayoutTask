import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Login action
export const loginAction = createAsyncThunk(
    "login/loginAction",
    async (formData) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_WEB_URL}/password`,
                formData
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);


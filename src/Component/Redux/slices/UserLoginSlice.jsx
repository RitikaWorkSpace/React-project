import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for logging in the user
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        try {
            const request = await axios.post(`https://fakestoreapi.com/auth/login`, userCredentials);
            const response = request.data;
            console.log('Login Response:', response); // Log the response
            localStorage.setItem('user', JSON.stringify(response));
            return response;
        } catch (error) {
            console.error('Login Error:', error.response ? error.response.data : error.message); // Log error details
            throw error; // Rethrow to handle in extraReducers
        }
    }
);

// Slice for user login/logout
const userLoginSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: JSON.parse(localStorage.getItem('user')) || null, // Initialize user from localStorage if available
        error: null
    },
    reducers: {
        // Action for logging out the user
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if (action.error.message === 'Request failed with status code 401') {
                    state.error = 'Access denied! Invalid credential';
                } else {
                    state.error = action.error.message;
                }
            });
    }
});

export const { logoutUser } = userLoginSlice.actions; // Export the logout action
export default userLoginSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import customFetch from '../../utils/axios';
import { toast } from 'react-toastify';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from '../../utils/localStorage';

const initialState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
  idSidebarOpen: false,
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/register', user);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data.msg });
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/login', user);
      toast.success(`Welcome back ${response.data.user.name}!`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data.msg });
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.idSidebarOpen = !state.idSidebarOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload.error);
      });
  },
});

export const { toggleSidebar } = userSlice.actions;

export default userSlice.reducer;

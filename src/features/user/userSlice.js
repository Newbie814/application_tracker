import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';
import { toast } from 'react-toastify';

const initialState = {
  user: null,
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/testingRegister', user);
      console.log(`response ${JSON.stringify(response)}`);
      return response.data;
    } catch (error) {
      console.log(`error ${JSON.stringify(error)}`);
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue({ error: error.response.data.message });
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    console.log(`login user ${JSON.stringify(user)}`);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
});

export default userSlice.reducer;

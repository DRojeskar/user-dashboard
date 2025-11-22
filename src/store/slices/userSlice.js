import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_USERS, FALLBACK_USERS } from '../../utils/constants';

export const fetchUsers = createAsyncThunk('users/fetch', async (_,{ rejectWithValue }) => {
  try {
    const res = await axios.get(API_USERS);
    return res.data;
  } catch (err) {
    return rejectWithValue('API fetch failed');
  }
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
     
      const newUser = { id: Date.now(), ...action.payload };
      console.log(newUser,"newUser")
      state.list.unshift(newUser);
    },

    deleteUser: (state, action) => {
      state.list = state.list.filter(u => u.id !== action.payload);
    },

    setFallback: (state) => {
      state.list = [...FALLBACK_USERS];
      state.error = 'Using fallback static data';
    }
  },


  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchUsers.fulfilled, (state, action) => { state.loading = false; state.list = action.payload; })
      .addCase(fetchUsers.rejected, (state) => { state.loading = false; state.error = 'Failed to fetch users'; state.list = [...FALLBACK_USERS]; });
  }
});

export const { addUser, deleteUser, setFallback } = userSlice.actions;
export default userSlice.reducer;

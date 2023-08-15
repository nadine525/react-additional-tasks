import {
  getUsers,
  getUserId,
  deleteUser,
  addUser,
  editUser,
} from './userOperation';
import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], isLoading: false, error: null, currentUser: null },
  extraReducers: builder =>
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(getUserId.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = state.users.filter(user => user.id !== action.payload.id);
        state.error = null;
      })
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const { id, name, phone, email, address, avatar } = action.payload;
        state.users = state.users.map(user =>
          user.id === id ? { id, name, phone, email, address, avatar } : user
        );
        state.isLoading = false;
        state.error = null;
      }),
});

export const usersReducer = usersSlice.reducer;

export const selectUsers = state => state.users;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64b677fddf0839c97e159e99.mockapi.io';

export const getUsers = createAsyncThunk(
  `users/getUsers`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/users`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserId = createAsyncThunk(
  `users/getUserId`,
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/users/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  `users/deleteUserId`,
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/postUser',
  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users', newUser);
      // console.log(savedUser);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editUser = createAsyncThunk(
  'users/editUser',
  async (editedUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/users/${editedUser.id}`, {
        name: editedUser.name,
        phone: editedUser.phone,
        address: editedUser.address,
        avatar: editedUser.avatar,
        email: editedUser.email,
      });
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

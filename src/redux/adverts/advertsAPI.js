import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'helpers/constants';

export const getAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async (queryParams, thunkApi) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/adverts?${queryParams}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

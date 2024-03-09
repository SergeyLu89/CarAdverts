import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://65e82b104bb72f0a9c4e7032.mockapi.io/';

export const getAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async (page, thunkApi) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/adverts?page=${page}&limit=12`
        // `${BASE_URL}/adverts?${queryParams}`
      );

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

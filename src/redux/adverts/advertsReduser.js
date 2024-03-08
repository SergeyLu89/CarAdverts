import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './advertsAPI';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: null,
    isLoading: false,
    error: null,
    total: null,
    isLoadMore: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getAdverts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adverts = payload;
      })
      .addCase(getAdverts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const advertsReducer = advertsSlice.reducer;

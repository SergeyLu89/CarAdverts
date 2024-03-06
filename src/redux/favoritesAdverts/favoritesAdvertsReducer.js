import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesAdverts: [],
  },
  reducers: {
    addFavoriteAdvert: (state, action) => {
      state.favoritesAdverts = [...state.favoritesAdverts, action.payload];
    },
    removeFavoriteAdvert: (state, action) => {
      state.favoritesAdverts = state.favoritesAdverts.filter(
        car => car.id !== action.payload.id
      );
    },
  },
});

const favoritesConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favoritesAdverts'],
};

export const { addFavoriteAdvert, removeFavoriteAdvert } =
  favoritesSlice.actions;
export const favoritesReducer = persistReducer(
  favoritesConfig,
  favoritesSlice.reducer
);

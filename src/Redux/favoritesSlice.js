import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  loading: false,
  error: "",
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteRequest: (state) => {
      state.loading = true;
    },
    addFavoriteSuccess: (state, action) => {
      state.loading = false;
      state.favorites.push(action.payload);
    },
    addFavoriteFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeFavoriteRequest: (state) => {
      state.loading = true;
    },
    removeFavoriteSuccess: (state, action) => {
      state.loading = false;
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
    removeFavoriteFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addFavoriteRequest,
  addFavoriteSuccess,
  addFavoriteFailure,
  removeFavoriteRequest,
  removeFavoriteSuccess,
  removeFavoriteFailure,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;

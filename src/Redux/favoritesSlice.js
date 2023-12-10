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
    addFavorite: (state, action) => {
      state.loading = true;
      state.favorites.push(action.payload);
      state.loading = false;
    },
    removeFavorite: (state, action) => {
      state.loading = true;
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
      state.loading = false;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

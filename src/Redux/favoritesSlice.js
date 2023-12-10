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
    getFavoriteFetch: (state) => (state.loading = true),
    getFavoritesSuccess: (state, action) => (
      (state.favorites = action.payload), (state.loading = false)
    ),
    addFavorite: (state) => (state.loading = true),
    removeFavorite: (state) => (state.loading = true),
    favoritesSuccess: (state) => (state.loading = false),
    favoritesFailure: (state, action) => (
      (state.loading = false), (state.error = action.payload)
    ),
  },
});

export const {
  getFavoriteFetch,
  getFavoritesSuccess,
  addFavorite,
  removeFavorite,
  favoritesSuccess,
  favoritesFailure,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favoriteArray: [],
  catalog: [],
};
const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    addToFavorite: (state, action) => ({
      ...state,
      favoriteArray: [...state.favoriteArray, { ...action.payload }],
    }),
    initializeCatalog: (state, action) => ({
      ...state,
      catalog: [...state.catalog, { ...action.payload }],
    }),
  },
});

export const { addToFavorite, initializeCatalog } = actionSlice.actions;
export default actionSlice.reducer;

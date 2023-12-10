import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catalog: [],
  loading: false,
  error: "",
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    getCatalogFetch: (state) => {
      state.loading = true;
    },
    getCatalogSuccess: (state, action) => {
      state.catalog = action.payload;
      state.loading = false;
      state.error = ""; 
    },
    getCatalogFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getCatalogFetch, getCatalogSuccess, getCatalogFailure } =
  catalogSlice.actions;
export default catalogSlice.reducer;

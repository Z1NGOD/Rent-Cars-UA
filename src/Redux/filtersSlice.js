import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  loading: false,
  error: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    getFiltersFetch: (state) => {
      state.loading = true;
    },
    getFiltersSuccess: (state, action) => {
      state.filters = action.payload;
      state.loading = false;
      state.error = ""; 
    },
    getFiltersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getFiltersFetch, getFiltersSuccess, getFiltersFailure } =
  filtersSlice.actions;
export default filtersSlice.reducer;

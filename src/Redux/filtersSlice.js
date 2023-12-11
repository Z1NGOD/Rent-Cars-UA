import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFilters = createAsyncThunk(
  "filters/fetchFilters",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://6574de3ab2fbb8f6509cbc8a.mockapi.io/api/v1/filters"
      );
      if (!response.data.length) {
        throw new Error("No filters found");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  filters: [],
  loading: false,
  error: "",
  searchFilters: {},
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchFilters: (state, action) => {
      state.loading = true;
      state.searchFilters = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filters = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setSearchFilters } = filtersSlice.actions;
export default filtersSlice.reducer;

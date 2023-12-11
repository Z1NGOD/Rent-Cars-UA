import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://6574de3ab2fbb8f6509cbc8a.mockapi.io/api/v1/catalog?${params}`
      );
      if (!response.data.length) {
        throw new Error("No matches found");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchCatalogOne = createAsyncThunk(
  "catalog/fetchCatalogOne",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://6574de3ab2fbb8f6509cbc8a.mockapi.io/api/v1/catalog?id=${params}`
      );
      if (!response.data.length) {
        throw new Error("No matches found");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    catalog: [],
    catalogOne: {},
    filteredCatalog: [],
    loading: false,
    error: "",
  },
  reducers: {
    setFilteredCatalog: (state, action) => {
      state.loading = true;
      state.filteredCatalog = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.catalog = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCatalogOne.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCatalogOne.fulfilled, (state, action) => {
        state.catalogOne = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchCatalogOne.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setFilteredCatalog } = catalogSlice.actions;
export default catalogSlice.reducer;

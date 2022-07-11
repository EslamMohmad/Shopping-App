import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSearchResults = createAsyncThunk(
  "search/searchData",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await (
        await fetch("DataBase/Data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
      ).json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: { results: [], inputValue: "" },
  reducers: {
    inputState: (state, { payload }) => {
      state.inputValue = payload;
    },
  },
  extraReducers: {
    [getSearchResults.pending]: (state, { payload }) => {
      //   console.log("wating");
    },
    [getSearchResults.fulfilled]: (state, { payload }) => {
      state.results = payload.bestSellers;
    },
    [getSearchResults.rejected]: (state, { payload }) => {
      console.log("error");
    },
  },
});

export const { inputState } = searchSlice.actions;

export default searchSlice.reducer;

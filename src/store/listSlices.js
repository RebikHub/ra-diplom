import { createSlice } from "@reduxjs/toolkit";


export const slices = createSlice({
  name: 'listSlices',
  initialState: {
    loading: false,
    error: null
  },
  reducers: {
    fetchItemsRequest: (state, action) => {
      state.loading = true
    }
  }
})

export const {
  fetchItemsRequest
} = slices.actions;

export default slices.reducer;
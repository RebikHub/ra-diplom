import { createSlice } from "@reduxjs/toolkit";


export const itemsSlice = createSlice({
  name: 'itemsSlice',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchItemsRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    fetchItemsSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchItemsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchItemsMoreSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = [...state.items, ...action.payload];
    }
  }
})

export const {
  fetchItemsRequest,
  fetchItemsFailure,
  fetchItemsSuccess,
  fetchItemsMoreSuccess
} = itemsSlice.actions;

export default itemsSlice.reducer;
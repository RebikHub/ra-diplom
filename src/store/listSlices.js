import { createSlice } from "@reduxjs/toolkit";


export const listSlices = createSlice({
  name: 'listSlices',
  initialState: {
    items: [],
    topSales: [],
    orderItem: null,
    categories: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    fetchItemsSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchTopSalesSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.topSales = action.payload;
    },
    fetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    addOrderItem: (state, action) => {
      state.orderItem = action.payload;
    }
  }
})

export const {
  fetchRequest,
  fetchFailure,
  fetchItemsSuccess,
  fetchTopSalesSuccess,
  fetchCategoriesSuccess,
  addOrderItem
} = listSlices.actions;

export default listSlices.reducer;
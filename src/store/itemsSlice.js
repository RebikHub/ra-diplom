import { createSlice } from "@reduxjs/toolkit";


export const itemsSlice = createSlice({
  name: 'itemsSlice',
  initialState: {
    items: [],
    item: [],
    loading: false,
    error: null,
    empty: false,
  },
  reducers: {
    fetchItemsRequest: (state, action) => {
      state.loading = true;
      state.error = null;
      state.empty = false;
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
      const res = [];
      action.payload.map((e) => !state.items.some((el) => e.id === el.id) ? res.push(e) : e);
      state.items = [...state.items, ...res];
    },
    fetchItemsMoreEmpty: (state, action) => {
      state.loading = false;
      state.error = null;
      state.empty = true;
    },
    fetchItemSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.item = action.payload;
    }
  }
})

export const {
  fetchItemsRequest,
  fetchItemsFailure,
  fetchItemsSuccess,
  fetchItemsMoreSuccess,
  fetchItemsMoreEmpty,
  fetchItemSuccess
} = itemsSlice.actions;

export default itemsSlice.reducer;
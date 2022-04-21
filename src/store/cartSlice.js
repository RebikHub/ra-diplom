import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    orders: [],
    loading: false,
    error: null,
    status: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
    removeItem: (state, action) => {
      state.orders = state.orders.filter((el) => el.id !== action.payload);
    },
    clearCart: (state, action) => {
      state.orders = [];
    },
    postCartRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    postCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    postCartSuccess: (state, action) => {
      state.loading = false;
      state.status = action.payload;
    },
  }
})

export const {
  addToCart,
  removeItem,
  clearCart,
  postCartRequest,
  postCartFailure,
  postCartSuccess
} = cartSlice.actions;

export default cartSlice.reducer;
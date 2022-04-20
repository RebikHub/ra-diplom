import { configureStore } from "@reduxjs/toolkit";
import topSalesSlice from "./topSalesSlice";
import categoriesSlice from "./categoriesSlice";
import itemsSlice from "./itemsSlice";


export const store = configureStore({
  reducer: {
    topSalesSlice,
    categoriesSlice,
    itemsSlice
  }
})
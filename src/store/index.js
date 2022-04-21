import { configureStore } from "@reduxjs/toolkit";
import topSalesSlice from "./topSalesSlice";
import categoriesSlice from "./categoriesSlice";
import itemsSlice from "./itemsSlice";
import searchSlice from "./searchSlice";


export const store = configureStore({
  reducer: {
    topSalesSlice,
    categoriesSlice,
    itemsSlice,
    searchSlice
  }
})
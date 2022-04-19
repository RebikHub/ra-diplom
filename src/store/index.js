import { configureStore } from "@reduxjs/toolkit";
import slices from "./listSlices";


export const store = configureStore({
  reducer: { slices }
})
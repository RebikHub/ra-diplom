import { configureStore } from "@reduxjs/toolkit";
import listSlices from "./listSlices";


export const store = configureStore({
  reducer: { listSlices }
})
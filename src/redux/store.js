import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./reducer/blogSlice";

export const store = configureStore({
  reducer: {
    blog: blogSlice,
  },
});

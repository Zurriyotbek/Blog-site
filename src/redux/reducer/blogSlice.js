import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [{ title: "Title", text: "loaklj asdflkjsadf", id: Date.now() }],
};

export const blogSlice = createSlice({
  name: "Blog",
  initialState,
  reducers: {
    addBlog(state, actions) {
      const { payload } = actions;
      return { blogs: [payload, ...state.blogs] };
    },
  },
});

export const { addBlog } = blogSlice.actions;

export default blogSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogs: []
  },
  reducers: {
    replaceBlogs(state, action) {
        state.blogs = action.payload.blogs;
      },
  },
});

export const blogActions = blogSlice.actions;

export default blogSlice;
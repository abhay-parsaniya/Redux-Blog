import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    title: '',
    content: ''
  },
  reducers: {
    newPost(state, action) {
      const {titleValue, contentValue, titleIsValid, contentIsValid} = action.payload;
      if (titleIsValid && contentIsValid) {
        state.title = titleValue;
        state.content = contentValue;
      }
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice;
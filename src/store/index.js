import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice/post-slice";
import blogSlice from "./slice/blog-slice";
import registerSlice from "./slice/register-slice";
import loginSlice from "./slice/login-slice";
import authSlice from "./slice/auth-slice";

const store = configureStore({
  reducer: {
    post: postSlice.reducer,
    blog: blogSlice.reducer,
    register: registerSlice.reducer,
    login: loginSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    email: '',
    username: '',
    password: ''
  },
  reducers: {
    newRegister(state, action) {
      const {emailValue, usernameValue, passwordValue, emailIsValid, usernameIsValid, passwordIsValid} = action.payload;
      if (emailIsValid && usernameIsValid && passwordIsValid) {
        state.email = emailValue;
        state.username = usernameValue;
        state.password = passwordValue;
      }
    },
  },
});

export const registerActions = registerSlice.actions;

export default registerSlice;
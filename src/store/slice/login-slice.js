import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: ''
  },
  reducers: {
    newLogin(state, action) {
      const {emailValue, passwordValue, emailIsValid, passwordIsValid} = action.payload;
      if (emailIsValid && passwordIsValid) {
        state.email = emailValue;
        state.password = passwordValue;
      }
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
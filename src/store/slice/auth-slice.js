import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {isLoggedIn: false, loginEmail: ''},
    reducers: {
        login(state, action){
            state.isLoggedIn = true;
            state.loginEmail = action.payload;
        },
        logout(state){
            state.isLoggedIn = false
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;
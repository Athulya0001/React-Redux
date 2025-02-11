import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    isAuthenticated : false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    login:(state, action)=>{
        state.user = action.payload
        state.isAuthenticated= true
    },
    logout:(state)=>{
        state.user=[],
        state.isAuthenticated=false
    }
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
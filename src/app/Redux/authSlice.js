import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: localStorage.getItem("currentlyActiveUser") || null,
  isAuthenticated:false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const existingUser = state.users.find(
        (user) => user.email === action.payload.email
      );
      if (!existingUser) {
        console.log("enterd function clll");
        state.users = [...state.users, action.payload];
        console.log("state user", state.users);
        localStorage.setItem("users", JSON.stringify(state.users));
        localStorage.setItem(
          "currentlyActiveUser",
          JSON.stringify(action.payload)
        );
      }else{

        alert('already a user registered with this email')
      }
    },
    login: (state, action) => {
      const existingUser = state.users.find(
        (user) => user.email === action.payload.email
      );

      if (existingUser) {
        const isPasswordCorrect = state.users.find(
          (user) => user.password === action.payload.password
        );

        if (isPasswordCorrect) {
          const authenticatedUser = state.users.find((user) => {
            return user.email === action.payload.email;
          });
          localStorage.setItem(
            "currentlyActiveUser",
            JSON.stringify(authenticatedUser)
          );
        } else {
          console.log("password incorrect");
        }
      } else {
        console.log("email incorrect");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("currentlyActiveUser");
    },
  },
});

export const { registerUser, login, logout } = authSlice.actions;
export default authSlice.reducer;

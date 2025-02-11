import { createSlice } from "@reduxjs/toolkit";

const currentlyActiveUser =
  JSON.parse(localStorage.getItem("currentlyActiveUser")) || null;

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || [],
  currentUser: currentlyActiveUser,
  isAuthenticated: currentlyActiveUser ? true : false,
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
          localStorage.setItem("users", JSON.stringify(action.payload));
        }
        console.log(state.users, "action from signup");
      },
      login: (state, action) => {
        const existingUser = state.users.find(
            (user) => user.email === action.payload.email
          );

        if(existingUser){
            const isPasswordCorrect = state.users.find((user)=>user.password === action.payload.password);

            if(isPasswordCorrect){
              state.isAuthenticated=true;
              const authenticatedUser =  state.users.find((user) => {
                return user.email === action.payload.email;
               });
               localStorage.setItem(
                "currentlyActiveUser",
                JSON.stringify(authenticatedUser)
              );
            }else{
              console.log('password incorrect')
            }
        }else{
          console.log('email incorrect')
        }
      },
      logout: (state) => {
        state.user = [];
        state.isAuthenticated = false;
        localStorage.removeItem("currentlyActiveUser");
      },
  
    },
  });
  
  export const { registerUser, login, logout } = authSlice.actions;
  export default authSlice.reducer;
  
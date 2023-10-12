import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import authenticationSlice from "./authenticationSlice";
import wishListSlice from "./wishListSlice";



const appStore = configureStore({
    reducer : {
        cart : cartSlice,
        authentication : authenticationSlice,
        wishList : wishListSlice,
    },
});

export default appStore;
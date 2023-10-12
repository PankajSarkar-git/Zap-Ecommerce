import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items:localStorage.getItem("Cartlist") !== null
    ? JSON.parse(localStorage.getItem("Cartlist"))
    : [],
  },
  reducers: {
    addItems: (state, action) => {
      //mutating the state here
      state.items.push(action.payload);
      localStorage.setItem("Cartlist", JSON.stringify(state.items));
      toast.success( action.payload.title + "has been added to your cart", {position:"bottom-center", theme:"colored"})
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
      localStorage.setItem("Cartlist", JSON.stringify(state.items));
      toast.info( action.payload.title + "has been removed to your cart", {position:"bottom-center", theme:"colored"})
      
    },
    clearcart: (state) => {
      state.items.length = 0;
      localStorage.removeItem("Cartlist");
      toast.info( "Your cart has been cleard!", {position:"bottom-center", theme:"colored"})

    },
  },
});

export const { addItems, removeItem, clearcart } = cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items:localStorage.getItem("Cartlist") !== null
//     ? JSON.parse(localStorage.getItem("Cartlist"))
//     : [],
//   },
//   reducers: {
//     addItems: (state, action) => {
//       //mutating the state here
//       state.items.push(action.payload);
//       localStorage.setItem("Cartlist", JSON.stringify(state.items));
//       toast.success( action.payload.title + "has been added to your cart", {position:"bottom-center", theme:"colored"})
//     },
//     removeItem: (state, action) => {
//       state.items.splice(action.payload, 1);
//       localStorage.setItem("Cartlist", JSON.stringify(state.items));
//       toast.info( action.payload.title + "has been removed to your cart", {position:"bottom-center", theme:"colored"})

//     },
//     clearcart: (state) => {
//       state.items.length = 0;
//       localStorage.removeItem("Cartlist");
//       toast.info( "Your cart has been cleard!", {position:"bottom-center", theme:"colored"})

//     },
//   },
// });

// export const { addItems, removeItem, clearcart } = cartSlice.actions;

// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items:
      localStorage.getItem("Cartlist") !== null
        ? JSON.parse(localStorage.getItem("Cartlist"))
        : [],
  },
  reducers: {
    addItems: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        toast.info(action.payload.title + " quantity increased", {
          position: "bottom-center",
          theme: "colored",
        });
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        toast.success(action.payload.title + " has been added to your cart", {
          position: "bottom-center",
          theme: "colored",
        });
      }

      localStorage.setItem("Cartlist", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
          toast.info(action.payload.title + " quantity decreased", {
            position: "bottom-center",
            theme: "colored",
          });
        } else {
          state.items.splice(index, 1);
          toast.info(
            action.payload.title + " has been removed from your cart",
            { position: "bottom-center", theme: "colored" }
          );
        }
      }

      localStorage.setItem("Cartlist", JSON.stringify(state.items));
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        toast.info(action.payload.title + " quantity increased", {
          position: "bottom-center",
          theme: "colored",
        });
      }
      localStorage.setItem("Cartlist", JSON.stringify(state.items));
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          toast.info(action.payload.title + " quantity decreased", {
            position: "bottom-center",
            theme: "colored",
          });
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload.id);
          toast.info(
            action.payload.title + " has been removed from your cart",
            { position: "bottom-center", theme: "colored" }
          );
        }
      }
      localStorage.setItem("Cartlist", JSON.stringify(state.items));
    },
    clearcart: (state) => {
      state.items = [];
      localStorage.removeItem("Cartlist");
      toast.info("Your cart has been cleared!", {
        position: "bottom-center",
        theme: "colored",
      });
    },
  },
});

export const {
  addItems,
  removeItem,
  clearcart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

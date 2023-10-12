import { createSlice } from "@reduxjs/toolkit";

const localStorageWishList = () => {
    const wishList = localStorage.getItem("WishList");
    if (wishList === null) {
        return [];
    }else{
        return JSON.parse(wishList);
    }
}

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    items: localStorageWishList(),
  },
  reducers: {
    addWishList: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("WishList" , JSON.stringify(state.items))
    },
    removeWishList: (state, action) => {
      state.items.slice(action.payload, 1);
      localStorage.setItem("WishList" , JSON.stringify(state.items))
    },
  },
});

export const {addWishList , removeWishList} = wishListSlice.actions;

export default wishListSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
// import { useEffect } from "react";
// import { api } from "../services/api";

interface IProducts {
  id: Number;
  name: String;
  brand: String;
  description: String;
  photo: String;
  price: Number;
}


export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    // cartItems: [],
    value: 0,
    loading: true,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
      if (state.value < 0) {
        state.value = 0;
      }
    },
    cartIsOpen: (state) => {
      state.isOpen = true;
    },
    cartIsClose: (state) => {
      state.isOpen = false;
    },
    setLoading: (state) => {
      state.loading = false;
    },
    // setCharacters: (state, action) => {
    //   if (action.payload.info) {
    //     state.cartItems = action.payload;
    //   } else if (action.payload.id) {
    //     state.cartItems = {
    //       results: [action.payload]
    //     };
    //   } else if (action.payload instanceof Array) {
    //     state.cartItems = {
    //       results: action.payload
    //     };
    //   } else {
    //     state.cartItems = {};
    //   }
    // },

    // addToCart: (state, action, id) => {
    //   state.cartItems = [...state.cartItems, action.payload];

    //     const item = state.cartItems.find((product) => product.id === id);

    //     if(item) {
    //       item.quantity += 1;
    //       state.cartItems(item);
    //     } else {
    //       state.cartItems(currentProducts => [...currentProducts]);
    //     }

    //     if (!item) {
    //       state.cartItems.push({ id, quantity: 1 });
    //     } else {
    //       item.quantity += 1;
    //     }
    //   }
    },
  },
);

export const { increment, decrement, cartIsOpen, cartIsClose, setLoading } =
  cartSlice.actions;
export default cartSlice.reducer;

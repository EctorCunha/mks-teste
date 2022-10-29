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
  quantity: Number;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    listApi: [],
    cartItems: [],
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
    setData: (state, action) => {
      state.listApi = action.payload;
    },
    addProduct: (state, action) => {
      const copyCartItems = [...state.cartItems];
      const product = copyCartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!product) {
        copyCartItems.push({ ...action.payload, quantity: 1 });
      } else {
        product.quantity += 1;
      }
      state.cartItems = copyCartItems;

      // state.cartItems.push(action.payload)

      // state.cartItems = state.cartItems.find( item => item.id === action.payload.id)
      // if(!state.cartItems){
      //   state.cartItems.push(action.payload)
      // } else {
      //   state.cartItems = state.cartItems
      // }
    },
    removeProducts: (state, action) => {
      const copyCartItems = [...state.cartItems];
      const product = copyCartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!product) {
        copyCartItems.push({ ...action.payload, quantity: 1 });
      } else {
        product.quantity += 1;
      }
      state.cartItems = copyCartItems;


      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    removeCartProducts: (state) => {
      state.cartItems = [];
    }
  },
});

// export const selectedProductsToCart = (state:any) => state.cart.cartItems;

export const addToCart = ({ id, quantity }: IProducts) => ({
  type: "cart/addToCart",
  payload: id,
  quantity: +1,
});

export const {
  increment,
  decrement,
  cartIsOpen,
  cartIsClose,
  setLoading,
  setData,
  addProduct, removeProducts, removeCartProducts
} = cartSlice.actions;
export default cartSlice.reducer;

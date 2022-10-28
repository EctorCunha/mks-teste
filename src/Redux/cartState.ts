import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { api } from "../services/api";

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
    // cartItems: <IProducts>{},
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
    // setData: (state) => {
    //   async function getData() {
    //     try {
    //       const response = await api.get(
    //         "/products?page=1&rows=8&sortBy=id&orderBy=ASC"
    //       );
    //       state.cartItems = response.data.products;
    //       console.log(state.cartItems);
    //     } catch {
    //       console.error("Erro ao buscar produto", "error");
    //     }
    //   }

    //   useEffect(() => {
    //     getData();
    //   }, []);
    // },
  },
});

export const { increment, decrement, cartIsOpen, cartIsClose, setLoading } =
  cartSlice.actions;
export default cartSlice.reducer;

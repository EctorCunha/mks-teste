import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        isOpen: false,
        cartItems: [],
        value: 0,
    },
    reducers: {
        increment:(state)=>{
            state.value += 1;
        },
        decrement:(state)=>{
            state.value -= 1;
            if(state.value < 0){
                state.value = 0;
            }
        },
        cartIsOpen:(state)=>{
            state.isOpen = true;
        },
        cartIsClose:(state)=>{
            state.isOpen = false;
        }
    }
});

export const {increment, decrement, cartIsOpen, cartIsClose} = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        deleteFromCart: () => {}
    },
});

export const {addToCart, deleteFromCart} = cartSlice.actions
export default cartSlice.reducer;
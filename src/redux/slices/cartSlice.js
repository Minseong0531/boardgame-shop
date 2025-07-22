import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const item = action.payload;
            const existing = state.items.find((i) => i.id === item.id)

            if (existing) {
                existing.qty +=1;
            } else {
                state.items.push({...item, qty:1});
            }
            state.totalAmount += item.price;
        },

        removeFromCart: (state, action) => {
            const id = action.payload;
            const item = state.items.find((i) => i.id === id);

            if (item) {
                state.totalAmount -= item.price * item.qty;
                state.items = state.items.filter((i) => i.id !== id);
            }
        },
        increaseQty: (state, action) => {
            const id = action.payload;
            const item = state.items.find((i) => i.id === id);
        
            if (item) {
                item.qty += 1;
                state.totalAmount += item.price;
            }
        },
        decreaseQty: (state, action) =>{
            const id = action.payload;
            const item = state.items.find((i)=>i.id === id)

            if(item && item.qty > 1){
                item.qty -= 1;
                state.totalAmount -= item.price;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
        }
    }
});

export const {addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
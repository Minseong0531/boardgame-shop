import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0
};

const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price * item.qty, 0);
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
    addToCart: (state, action) => {
        const item = action.payload;
        const existing = state.items.find((i) => i.id === item.id);

        if (existing) {
            existing.qty += 1;
        } else {
            state.items.push({ ...item, qty: 1 });
        }

        state.totalAmount = calculateTotal(state.items);
    },

    removeFromCart: (state, action) => {
        const id = action.payload;
        state.items = state.items.filter((i) => i.id !== id);
        state.totalAmount = calculateTotal(state.items);
    },

    increaseQty: (state, action) => {
        const id = action.payload;
        const item = state.items.find((i) => i.id === id);
        if (item) item.qty += 1;

        state.totalAmount = calculateTotal(state.items);
    },

    decreaseQty: (state, action) => {
        const id = action.payload;
        const item = state.items.find((i) => i.id === id);

        if (item && item.qty > 1) {
        item.qty -= 1;
        }

        state.totalAmount = calculateTotal(state.items);
    },

    clearCart: (state) => {
        state.items = [];
        state.totalAmount = 0;
    }
}
});

export const {
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
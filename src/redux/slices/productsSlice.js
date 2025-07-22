import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const mockProducts = [
    { id: 1, name: '카탄의 개척자들', price: 35000, category: 'strategy' , src:'./image/thumb/catan.jpg'},
    { id: 2, name: '스플렌더', price: 28000, category: 'family', src:'./image/thumb/splender.jpg' },
    { id: 3, name: '팬데믹', price: 30000, category: 'co-op', src:'./image/thumb/pandemic.jpg' }
  ];

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    return mockProducts;
});

const productsSlice = createSlice({
    name:'products',
    initialState: {
        list:[],
        status: 'idie',
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.list = action.payload;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      }
    });
    
export default productsSlice.reducer;

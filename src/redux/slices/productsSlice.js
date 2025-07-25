import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const mockProducts = [
    { id: 1, name: '카탄의 개척자들', price: 35000, category: 'strategy' , src:'/image/thumb/catan.jpg', detail:'/image/detail/catan_detail.jpg'},
    { id: 2, name: '스플렌더', price: 28000, category: 'family', src:'/image/thumb/splender.jpg', detail:'/image/detail/splender_detail.jpg'},
    { id: 3, name: '팬데믹', price: 30000, category: 'co-op', src:'/image/thumb/pandemic.jpg', detail:'/image/detail/pandemic_detail.jpg'},
    { id: 4, name: '다빈치 코드', price: 26000, category: 'co-op', src:'/image/thumb/davinci_code.jpg', detail:'/image/detail/davincicode_detail.jpg' },
    { id: 5, name: '뱅', price: 28000, category: 'co-op', src:'/image/thumb/bang.jpg', detail:'/image/detail/bang_detail.jpg' }
  ];

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    return mockProducts;
});

const productsSlice = createSlice({
    name:'products',
    initialState: {
        list:[],
        status: 'idle',
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

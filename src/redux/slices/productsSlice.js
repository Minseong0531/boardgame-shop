import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const mockProducts = [
  { id: 1, name: '카탄의 개척자들', price: 35000, category: '전략', src: '/image/thumb/catan.jpg', detail: '/image/detail/catan_detail.jpg', brand: 'Kosmos', reviewCount: 785 },
  { id: 2, name: '스플렌더', price: 28000, category: '가족', src: '/image/thumb/splender.jpg', detail: '/image/detail/splender_detail.jpg', brand: 'Space Cowboys', reviewCount: 592 },
  { id: 3, name: '팬데믹', price: 30000, category: '협력', src: '/image/thumb/pandemic.jpg', detail: '/image/detail/pandemic_detail.jpg', brand: 'Z-Man Games', reviewCount: 911 },
  { id: 4, name: '다빈치 코드', price: 26000, category: '추리', src: '/image/thumb/davinci_code.jpg', detail: '/image/detail/davincicode_detail.jpg', brand: 'Gakken', reviewCount: 273 },
  { id: 5, name: '뱅', price: 28000, category: '협력', src: '/image/thumb/bang.jpg', detail: '/image/detail/bang_detail.jpg', brand: 'dV Giochi', reviewCount: 483 },
  { id: 6, name: '하트 오브 크라운', price: 48000, category: '덱빌딩', src: '/image/thumb/heart_of_crown.jpg', detail: '/image/detail/heart_of_crown_detail.jpg', brand: 'FLIPFLOPs', reviewCount: 194 },
  { id: 7, name: '죄수들의 밤', price: 32000, category: '정체은닉', src: '/image/thumb/criminal_night.jpg', detail: '/image/detail/criminal_night_detail.jpg', brand: '국내 제작', reviewCount: 327 },
  { id: 8, name: '포켓몬 스플렌더', price: 38000, category: '가족', src: '/image/thumb/pokemon_splendor.png', detail: '/image/detail/pokemon_splendor_detail.jpg', brand: '포켓컴퍼니', reviewCount: 803 },
  { id: 9, name: '셀레스티아', price: 34000, category: '파티', src: '/image/thumb/celestia.jpg', detail: '/image/detail/celestia_detail.jpg', brand: 'BLAM!', reviewCount: 476 },
  { id: 10, name: '탑텐티비', price: 30000, category: '파티', src: '/image/thumb/topten_tv.jpg', detail: '/image/detail/topten_tv_detail.jpg', brand: '코리아보드게임즈', reviewCount: 118 },
  { id: 11, name: '티켓 투 라이드', price: 45000, category: '전략', src: '/image/thumb/ticket_to_ride.jpg', detail: '/image/detail/ticket_to_ride_detail.jpg', brand: 'Days of Wonder', reviewCount: 935 },
  { id: 12, name: '루미큐브', price: 27000, category: '가족', src: '/image/thumb/rummikub.jpg', detail: '/image/detail/rummikub_detail.jpg', brand: 'Lemada Light Industries', reviewCount: 702 },
  { id: 13, name: '아발론', price: 25000, category: '정체은닉', src: '/image/thumb/avalon.jpg', detail: '/image/detail/avalon_detail.jpg', brand: 'Indie Boards & Cards', reviewCount: 842 },
  { id: 14, name: '코드네임', price: 23000, category: '파티', src: '/image/thumb/codenames.jpg', detail: '/image/detail/codenames_detail.jpg', brand: 'Czech Games Edition', reviewCount: 667 },
  { id: 15, name: '도미니언', price: 50000, category: '덱빌딩', src: '/image/thumb/dominion.jpg', detail: '/image/detail/dominion_detail.jpg', brand: 'Rio Grande Games', reviewCount: 924 },
  { id: 16, name: '7원더스', price: 52000, category: '전략', src: '/image/thumb/7wonders.jpg', detail: '/image/detail/7wonders_detail.jpg', brand: 'Repos Production', reviewCount: 388 },
  { id: 17, name: '한밤의 늑대인간', price: 24000, category: '정체은닉', src: '/image/thumb/werewolf.jpg', detail: '/image/detail/werewolf_detail.jpg', brand: 'Bezier Games', reviewCount: 654 },
  { id: 18, name: '정령섬', price: 68000, category: '협력', src: '/image/thumb/spirit_island.jpg', detail: '/image/detail/spirit_island_detail.jpg', brand: 'Greater Than Games', reviewCount: 812 },
  { id: 19, name: '디셉션', price: 29000, category: '추리', src: '/image/thumb/deception.jpg', detail: '/image/detail/deception_detail.jpg', brand: 'Grey Fox Games', reviewCount: 405 },
  { id: 20, name: '스컬', price: 22000, category: '파티', src: '/image/thumb/skull.jpg', detail: '/image/detail/skull_detail.jpg', brand: 'Asmodee', reviewCount: 341 }
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

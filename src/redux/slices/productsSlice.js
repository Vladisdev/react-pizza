import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

export const getProducts = createAsyncThunk(
  'products/getProductsStatus',
  async params => {
    const { category, activeSort, orderSort, search } = params;
    const { data } = await axios.get(
      `https://642adecbb11efeb759a50961.mockapi.io/items?${category}&sortBy=${activeSort.sortProperty}&order=${orderSort}&${search}`
    );

    return data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [getProducts.pending]: state => {
      state.status = 'loading';
      state.items = [];
    },
    [getProducts.rejected]: state => {
      state.status = 'error';
      state.items = [];
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
  },
});

export const productsSelector = state => state.products; 

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

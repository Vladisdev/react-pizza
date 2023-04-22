import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  item: [],
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

export const getProduct = createAsyncThunk(
  'products/getProductStatus',
  async id => {
    const { data } = await axios.get(
      `https://642adecbb11efeb759a50961.mockapi.io/items/${id}`
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
  extraReducers: builder => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    });
    builder.addCase(getProducts.pending, state => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(getProducts.rejected, state => {
      state.status = 'error';
      state.items = [];
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.item = action.payload;
    });
    builder.addCase(getProduct.pending, state => {
      state.item = [];
    });
    builder.addCase(getProduct.rejected, state => {
      state.item = [];
    });
  },
});

export const productsSelector = state => state.products;

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

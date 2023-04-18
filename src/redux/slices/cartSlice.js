import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find(item => {
        if (
          item.id === action.payload.id &&
          item.type === action.payload.type &&
          item.size === action.payload.size
        ) {
          return true;
        }
      });

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalCount++;
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action) => {
      const findItem = state.items.find(item => item.id === action.payload.id);

      if (findItem) {
        findItem.count--;
      }

      if (findItem.count < 1) {
        const newStateItems = state.items.filter(
          item => item.id !== findItem.id
        );

        state.totalCount--;
        state.totalPrice -= action.payload.price;
        state.items = newStateItems;
      }
    },
    deleteItem: (state, action) => {
      const findItem = state.items.find(item => item.id === action.payload.id);

      if (findItem) {
        const newStateItems = state.items.filter(
          item => item.id !== findItem.id
        );

        state.totalCount -= findItem.count;
        state.totalPrice -= findItem.price * findItem.count;
        state.items = newStateItems;
      }
    },
    clearItems: state => {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const cartSelector = state => state.cart;

export const cartItemByIdSelector = id => state =>
  state.cart.items?.find(item => item.id === id);

export const { addItem, removeItem, deleteItem, clearItems } =
  cartSlice.actions;

export default cartSlice.reducer;

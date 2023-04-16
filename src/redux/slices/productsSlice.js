import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.items = action.payload;
		},
	},
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

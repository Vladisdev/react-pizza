import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeCategoryId: 0,
	activeSort: {
		name: 'популярности',
		sortProperty: 'rating',
	},
	orderSort: 'desc',
};

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId: (state, action) => {
			state.activeCategoryId = action.payload;
		},
		setSortType: (state, action) => {
			state.activeSort = action.payload;
		},
		setSortOrder: (state, action) => {
			state.orderSort = action.payload;
		},
	},
});

export const { setCategoryId, setSortType, setSortOrder } = filterSlice.actions;

export default filterSlice.reducer;

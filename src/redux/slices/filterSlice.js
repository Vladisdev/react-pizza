import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchValue: '',
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
		setSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
		setFilters: (state, action) => {
			state.activeCategoryId = Number(action.payload.activeCategoryId);
			state.activeSort = action.payload.sortObj;
			state.orderSort = action.payload.orderSort;
		},
	},
});

export const {
	setCategoryId,
	setSortType,
	setSortOrder,
	setSearchValue,
	setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;

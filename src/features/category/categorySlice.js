import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	categories: [],
	serviceProviders: [],
	error: null,
};

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		fetchStart: (state) => {
			state.isLoading = true;
		},
		fetchCategoriesData: (state, action) => {
			state.isLoading = false;
			state.categories = action.payload;
		},
		fetchError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchStart, fetchCategoriesData, fetchError } =
	categorySlice.actions;
export default categorySlice.reducer;

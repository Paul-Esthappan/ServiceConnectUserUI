import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	accessToken: localStorage.getItem("accessToken") || null,
	refreshToken: localStorage.getItem("refreshToken") || null,
	user: null,
	otpProvider: null,
	isLoading: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setTokens: (state, action) => {
			const { access, refresh } = action.payload;
			state.accessToken = access;
			state.refreshToken = refresh;
			localStorage.setItem("accessToken", access);
			localStorage.setItem("refreshToken", refresh);
		},
		logout: (state) => {
			state.accessToken = null;
			state.refreshToken = null;
			state.user = null;
			localStorage.removeItem("accessToken");
			localStorage.removeItem("refreshToken");
		},
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setOtpProvider: (state, action) => {
			state.otpProvider = action.payload;
		},
	},
});

export const { setTokens, logout, setUser, setOtpProvider } = authSlice.actions;
export default authSlice.reducer;

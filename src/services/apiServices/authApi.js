import axiosInstance from "../../axios/axiosInstance";



// register api
export const registerUser = async (data) => {
	try {
		const response = await axiosInstance.post("/register/", data);
		return response.data;
	} catch (error) {
		console.error("Error registering user:", error);
		throw error;
	}
};

// verify otp registration
export const verifyOtpRegistration = async (data) => {
	try {
		const response = await axiosInstance.post(
			"/verify-otp-registration/",
			data
		);
		return response.data;
	} catch (error) {
		console.error("Error verifying OTP:", error);
		throw error;
	}
};

// customer resend otp
export const resendOtp = async (data) => {
	try {
		const response = await axiosInstance.post(
			"/resend-otp/",
			data
		);
		return response.data;
	} catch (error) {
		console.error("Error resending OTP:", error);
		throw error;
	}
};

// login user
export const loginUser = async (data) => {
	try {
		const response = await axiosInstance.post("/login/", data);
		return response.data;
	} catch (error) {
		console.error("Error logging in user:", error);
		throw error;
	}
};

// forgot password
export const forgotPassword = async (data) => {
	try {
		const response = await axiosInstance.post(
			"/password-forgot/",
			data
		);
		return response.data;
	} catch (error) {
		console.error("Error forgot password:", error);
		throw error;
	}
};

// password reset
export const passwordReset = async (data) => {
	try {
		const response = await axiosInstance.post(
			"/customer/password-reset/",
			data
		);
		return response.data;
	} catch (error) {
		console.error("Error password reset:", error);
		throw error;
	}
};

// verify otp for forgot password
export const verifyOtp = async (data) => {
	try {
		const response = await axiosInstance.post(
			"/customer/verify-otp/",
			data
		);
		return response.data;
	} catch (error) {
		console.error("Error verify otp:", error);
		throw error;
	}
};

// get profile
export const getProfile = async () => {
	try {
		const response = await axiosInstance.get("/profile/");
		return response.data;
	} catch (error) {
		console.error("Error get profile:", error);
		throw error;
	}
};


// update profile

export const updateProfile = async ( profile) => {
	try {
		const response = await axiosInstance.put(
			"/profile/",
			profile,
		);
		return response.data;
	} catch (error) {
		console.error("Error update profile:", error);
		throw error;
	}
};

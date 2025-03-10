import React from "react";
import { useDispatch } from 'react-redux';
import FormComponent from "../../reUsableComponents/FormComponent";
import GoogleLoginButton from "./GoogleButtonComponent";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/apiServices/authApi";
import { setOtpProvider } from "../../../features/auth/authSlice";

const SignUpUser = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const fieldConfigs = [
		{
			name: "email_or_phone",
			type: "text",
			placeholder: "Enter your email or phone number",
			required: true,
		},
		{
			name: "password",
			type: "password",
			placeholder: "Enter your password",
			required: true,
		},
		{
			name: "confirm_password",
			type: "password",
			placeholder: "Confirm your password",
			required: true,
		},
	];

	const buttonConfig = {
		label: "Register",
		type: "submit",
		btnWidth: "w-full",
		btnHeight: "32px",
		hasIcon: true,
	};

	const inputConfig = {
		inputWidth: "100%",
		inputHeight: "46px",
	};

	const apiEndpoint = async (values) => {
		// console.log("Form submitted with values:", values);
		try {
			const response = await registerUser(values);
			dispatch(setOtpProvider(values.email_or_phone));
			console.log(response);
			navigate("/otp");
		} catch (error) {
			console.error("Error occurred during form submission:", error);
		}

		const response = await registerUser(values);
		console.log(response);
	};
	return (
		<div className="min-h-screen bg-light-gray flex items-center justify-center">
			<div className="bg-light-gray shadow-lg p-4 max-w-xl w-full  md:max-w-lg sm:h-full lg:max-w-xl lg:p-0 xl:max-w-lg xl:p-4">
				<div className="flex justify-center ">
					<div className="w-auto h-14 flex items-center justify-center">
						<img src="/Icon.svg" alt="Profile" className="mr-2" />
						<span className="font-bold  text-lg sm:text-xl lg:text-2xl text-font-default whitespace-nowrap">
							Service Connect
						</span>
					</div>
				</div>

				<div className="flex flex-col bg-light-gray p-0 sm:p-4 rounded-lg  w-full mt-8">
					<h2 className="font-default font-bold text-dark-gray text-xl sm:text-2xl mb-0 text-left">
						Getting Started.!
					</h2>

					<div className="flex justify-center mt-0">
						<FormComponent
							fieldConfigs={fieldConfigs}
							buttonConfig={buttonConfig}
							inputConfig={inputConfig}
							apiEndpoint={apiEndpoint}
						/>
					</div>

					<GoogleLoginButton />
				</div>
			</div>
		</div>
	);
};

export default SignUpUser;

import React, { useEffect, useState } from "react";
import ProfilePicture from "../../components/user/profileEditComponents/ProfilePicture";
import ProfileName from "../../components/user/profileEditComponents/ProfileName";
import DOB from "../../components/user/profileEditComponents/DOB";
import PhoneNumber from "../../components/user/profileEditComponents/PhoneNumber";
import UserProfession from "../../components/user/profileEditComponents/UserProfession";
import UpdateButton from "../../components/user/profileEditComponents/UpdateButton";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../services/apiServices/authApi";
import { setUser } from "../../features/auth/authSlice";

const EditProfile = () => {
	const { user } = useSelector((state) => state.auth);
  	const dispatch = useDispatch();

	const [profile, setProfile] = useState({
		fullName: "",
		nickName: "",
		dob: "",
		email: "",
		phone: "",
		gender: "",
		studentStatus: "",
		countryCode: "+91", // Default country code
	});

	// Initialize state with user
	useEffect(() => {
		if (user) {
			setProfile((prevState) => ({
				...prevState,
				fullName: user?.user?.full_name || "",
				// nickName: user.user.nick_name || "",
				dob: user?.date_of_birth || "",
				email: user?.user?.email || "",
				phone: user?.user?.watsapp || "",
				gender: user?.gender || "",
				// studentStatus: user.user.studentStatus || "",
			}));
		}
	}, [user]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProfile({ ...profile, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formatedData = {
			user: {
				full_name: profile?.fullName,
				watsapp: profile?.phone,
			},
			profile_image: null,
			date_of_birth: profile?.dob,
			gender: profile?.gender,
		};

		const response = await updateProfile(formatedData);
		dispatch(setUser(response));
	};

	return (
		<div className="flex flex-col  items-center p-4 sm:p-6 bg-light-gray h-screen">
			<ProfilePicture />
			<form onSubmit={handleSubmit} className="w-full max-w-md">
				<ProfileName
					profile={profile}
					handleInputChange={handleInputChange}
				/>
				<DOB profile={profile} handleInputChange={handleInputChange} />
				<PhoneNumber
					profile={profile}
					handleInputChange={handleInputChange}
				/>
				<UserProfession
					profile={profile}
					handleInputChange={handleInputChange}
				/>
				<UpdateButton />
			</form>
		</div>
	);
};

export default EditProfile;

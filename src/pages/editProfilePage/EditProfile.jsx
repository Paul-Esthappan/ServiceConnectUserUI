import React, { useEffect, useState } from "react";
import ProfilePicture from "../../components/user/profileEditComponents/ProfilePicture";
import ProfileName from "../../components/user/profileEditComponents/ProfileName";
import DOB from "../../components/user/profileEditComponents/DOB";
import PhoneNumber from "../../components/user/profileEditComponents/PhoneNumber";
import UserProfession from "../../components/user/profileEditComponents/UserProfession";
import UpdateButton from "../../components/user/profileEditComponents/UpdateButton";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../services/apiServices/authApi";
// import { setUserInfo } from "../../redux/features/userSlice";

const EditProfile = () => {
	const { userInfo, token } = useSelector((state) => state.user);
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

	// Initialize state with userInfo
	useEffect(() => {
		if (userInfo) {
			setProfile((prevState) => ({
				...prevState,
				fullName: userInfo?.user?.full_name || "",
				// nickName: userInfo.user.nick_name || "",
				dob: userInfo?.date_of_birth || "",
				email: userInfo?.user?.email || "",
				phone: userInfo?.user?.watsapp || "",
				gender: userInfo?.gender || "",
				// studentStatus: userInfo.user.studentStatus || "",
			}));
		}
	}, [userInfo]);

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

		const response = await updateProfile(token, formatedData);
    // dispatch(setUserInfo(response));
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

import React, { useState } from 'react';
import { CiImageOn } from "react-icons/ci";
import { useSelector } from 'react-redux';

const ProfileInfo = () => {
  const { user } = useSelector((state) => state.auth);
  const [profilePic, setProfilePic] = useState("https://cdn4.vectorstock.com/i/1000x1000/01/38/young-man-profile-vector-14770138.jpg");



  //function to mimic the profile pic change function
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newProfilePic = URL.createObjectURL(file);
      setProfilePic(newProfilePic); // Update the profile picture with the selected file
    }
  };

  return (
		<div className="flex flex-col items-center">
			<div className="relative">
				<img
					src={user?.profile_image || profilePic}
					alt="profile"
					className="w-24 h-24 rounded-full border-4 border-light-gray shadow-md"
				/>
				<div className="absolute bottom-0 right-0 p-1 border bg-primary rounded-2xl cursor-pointer">
					<label htmlFor="profile-pic-upload">
						<CiImageOn className="text-green-500 text-xl" />
					</label>
					<input
						id="profile-pic-upload"
						type="file"
						accept="image/*"
						onChange={handleProfilePicChange}
						className="hidden"
					/>
				</div>
			</div>

			<div className="text-center mt-4">
				<h2 className="text-2xl font-semibold">
					{user?.user?.full_name}
				</h2>
				<p className="text-gray-500">{user?.user?.email}</p>
			</div>
		</div>
  );
};

export default ProfileInfo;

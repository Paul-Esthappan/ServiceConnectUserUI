
/* eslint-disable no-unused-vars */


import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import AllCategoryComponent from "../components/user/allCategoryAndSubCategoryComponent/allCategoryComponent/AllCategoryComponent";
import SubCategoryComponent from "../components/user/allCategoryAndSubCategoryComponent/subcategoryComponent/SubCategoryComponent";
import AddProfilePage from "../pages/signUpSignInPages/AddProfilePage";
import OtpVerificationPage from "../pages/signUpSignInPages/OtpVerificationPage";
import UserSignInPage from "../pages/signUpSignInPages/UserSignInPage";
import UserSignUpPage from "../pages/signUpSignInPages/UserSignUpPage";
import CreateNewPasswordPage from "../pages/forgotPasswordPages/CreateNewPasswordPage";
import ForgotPasswordPage from "../pages/forgotPasswordPages/ForgotPasswordPage";
import VerifyForgotPassword from "../pages/forgotPasswordPages/VerifyForgotPassword";
import PaymentMethodPage from "../pages/paymentMethodsPages/PaymentMethodPage";
import Home from '../pages/HomePage/Home'
import ProviderProfile from '../pages/ProviderProfilePage/ProviderProfile'
import TermsAndConditionPage from "../pages/termsAndConditionPage/TermsAndConditionPage";





function UserRoutes() {
  return (
    <div>
      <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Navigate to="/signin" />} />

        <Route path="/addprofile" element={<AddProfilePage />} />

        <Route path="/signin" element={<UserSignInPage />} />

        <Route path="/signup" element={<UserSignUpPage />} />

        <Route path="/otp" element={<OtpVerificationPage />} />

        <Route path="/allcategories" element={<AllCategoryComponent />} />

        <Route path="/allcategories/:categoryId" element={<SubCategoryComponent />} />

        <Route path="/paymentmethods" element={<PaymentMethodPage />} />
          
        <Route path="/forgotpassword" element={<ForgotPasswordPage/>} />

        <Route path="/createnewpassword" element={<CreateNewPasswordPage/>} />

        <Route path="/verifyforgotpassword" element={<VerifyForgotPassword/>} />

        <Route path='/home' element={<Home />} />

        <Route path='/providerprofile' element={<ProviderProfile />} />

<<<<<<< HEAD
        <Route path="/termsandconditions" element={<TermsAndConditionPage />} />
        
=======
>>>>>>> e3bd70b9a5a4bdd71996ddb82ce73e1ed635f065
      </Routes>
</Routes>

    </div>
  );
}

export default UserRoutes;


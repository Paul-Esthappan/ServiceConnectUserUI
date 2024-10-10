import React, { useState } from 'react';
import BookingTitleDescription from '../../components/user/BookingDetailsComponents/BookingTitleDescription';
import AvailabilitySection from '../../components/user/BookingDetailsComponents/AvailabilitySection';
import RescheduleButton from '../../components/user/BookingDetailsComponents/RescheduleButton';
import InvoiceSummary from '../../components/user/BookingDetailsComponents/InvoiceSummary';
import AcceptPayButton from '../../components/user/BookingDetailsComponents/AcceptPayButton';
import ImageUploader from '../../components/user/BookingDetailsComponents/ImageUploader';
import ProfileInfo from '../../components/user/BookingDetailsComponents/ProfileInfo';

const BookingDetails = () => {
  const [bookingDetails, setBookingDetails] = useState({}); 
  const [uploadedImages, setUploadedImages] = useState([]);

 
  const handleInputChange = (value, fieldName) => {
    console.log('Input changed:', fieldName, value);
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: value,
    }));
  };

  const handleImagesUploaded = (images) => {
    setUploadedImages(images);
    console.log('Images uploaded:', images);
  };

  const handleAcceptPayClick = () => {
    console.log('Redirecting to next page');
  };

  return (
    <div className="p-4 bg-light-gray min-h-screen">
      <ProfileInfo
        profileImage="https://randomuser.me/api/portraits/men/32.jpg"
        name="Nazrul Islam"
        jobTitle="Electrification"
        bookingId="12aa21w"
      />
      <BookingTitleDescription onInputChange={handleInputChange} />
      <ImageUploader onImagesUploaded={handleImagesUploaded} />
      <AvailabilitySection onInputChange={handleInputChange} />
      <RescheduleButton isActive={Object.keys(bookingDetails).length > 0 || uploadedImages.length > 0} /> 
      <InvoiceSummary />
      <AcceptPayButton onClick={handleAcceptPayClick} />
    </div>
  );
};

export default BookingDetails;
import React from 'react';

const TransactionCard = ({ serviceTitle, category, serviceImg, status }) => {
  return (
    <>
      <div className="flex items-center bg-primary rounded-xl shadow-xl p-4 ">
        <img
          src={serviceImg}
          alt="Profile"
          className="w-24 h-24 rounded-3xl mr-4 shadow-md"
        />
        <div className="flex flex-col w-full">
          <h2 className="text-lg font-semibold text-secondary">
            {serviceTitle}
          </h2>
          <p className="text-sm font-semibold text-gray-500 mb-1">{category}</p>
          <span className="bg-teal-700 text-primary text-sm font-semibold p-1 w-16 shadow-md text-center mt-1">
            {status}
          </span>
        </div>
      </div>
    </>
  );
};

export default TransactionCard;
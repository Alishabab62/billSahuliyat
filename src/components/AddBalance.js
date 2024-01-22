import React from 'react';
import { FaPlusCircle, FaRupeeSign } from 'react-icons/fa';

const AddBalance = ({ balance, type, getbilldetail }) => {
  return (
    <div className="md:w-1/4">
      <div className="rounded-2xl bg-white inline-block p-4 md:ml-3 ml-0 w-full mb-3 mt-3 md:mb-0 md:mt-0 h-full">
        <div className="w-full">
          <h1 className="text-2xl">Your Balance</h1>
          <div className="flex items-center">
            <FaRupeeSign className="text-[#0d6efd] text-3xl" />
            <h1 className="text-[#0d6efd] text-4xl font-medium">{balance}</h1>
          </div>
        </div>
        {type == 'PREPAID' ? (
          <div className="relative top-4 left-5">
            <button className="flex items-center bg-[#0d6efd] px-5 py-3 rounded-3xl">
              <FaPlusCircle className="text-white text-2xl" />
              <span className="text-white ml-2 text-xl">Add Balance</span>
            </button>
          </div>
        ) : (
          <div
            onClick={() => getbilldetail()}
            className="relative top-4 left-5"
          >
            <button className="flex items-center bg-[#0d6efd] px-5 py-3 rounded-3xl">
              <span className="text-white ml-2 text-xl">View Bill</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBalance;

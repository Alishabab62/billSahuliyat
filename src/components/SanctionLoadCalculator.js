import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillApi } from 'react-icons/ai';
import { MdOutlineCalculate } from 'react-icons/md';
import axios from 'axios';

const SanctionLoadCalculator = ({ setShowApplication }) => {
  const [loadError, setLoadError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [selectedLoad, setSelectedLoad] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [res, setRes] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const handleAgreeClick = () => {
    if (res) {
      setShowApplication(true);
    }
  };

  const onClickRes = () => {
    setCategoryError('');
    setLoadError('');

    if (!selectedCategory) {
      setCategoryError('Please select a category.');
      return;
    }

    if (!selectedLoad || selectedLoad.trim() === '') {
      setLoadError('Please enter a sanction load.');
      return;
    }

    if (selectedCategory && selectedLoad && selectedLoad.trim() !== '') {
      try {
        const url =
          'http://172.18.2.114:7020/soa-infra/resources/RESTKPDCL/DepositeBillCom!1.0/RestService/?rateCategory=' +
          selectedCategory +
          '&load=' +
          selectedLoad;
        axios
          .get(url)
          .then((res) => {
            setRes(res?.data?.Response?.depositBillAmount);
            setShowResult(true);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Please fill in all the required fields.');
      return;
    }
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    if (selectedValue === 'DOM') {
      setInputValue('KW');
    } else {
      setInputValue('KVAH');
    }
    setSelectedCategory(event.target.value);
    setCategoryError('');
  };

  const handleLoadChange = (event) => {
    const loadValue = event.target.value;
    setSelectedLoad(loadValue);
    setLoadError(
      loadValue.trim() === '' ? 'Please enter a sanction load.' : ''
    );
  };

  return (
    <div className="flex justify-center items-center h-screen sm:h-screen md:h-screen lg:h-screen">
      <div className="w-3/5 grid grid-rows-5 gap-2 border border-gray-300 rounded-lg shadow-2xl p-4">
        <div className="grid grid-rows-2 gap-2">
          <div className="flex items-center justify-center">
            <h5 className="font-bold text-center text-[#2B3674] sm:text-md md:text-xl lg:text-2xl sm:font-bold md:font-bold lg:font-bold 2xl:font-bold">
              Calculate your Sanction Load
            </h5>
          </div>
          {showResult && (
            <div className="flex justify-center items-center sm:mx-4 md:mx-4">
              <p className="mx-4 text-red-600 pb-2 text-xs font-bold bg-red-50 rounded px-4 sm:text-xs md:text-sm lg:text-sm 2xl:text-sm">
                This is a tentative security deposit determined by the load you
                provided. Please note that it is subject to potential
                adjustments following a proper field inspection, wherein such
                changes could involve an increase or decrease in amount to be
                paid.
              </p>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <div className="">
              <div
                className="block text-[#2B3674] text-center text-xs font-bold mb-1 sm:text-xs md:text-sm lg:text-base 2xl:text-base lg:mb-2 2xl:mb-2"
                htmlFor="category"
              >
                Select a Category{' '}
                <span className="text-red-500 font-extrabold text-base">*</span>
              </div>
              <div className="text-left flex items-center justify-center">
                <select
                  id="countries"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="border border-gray-300 text-gray-800 text-xs rounded shadow focus:ring-gray-100 focus:border-gray-100 block p-2.5 w-40 sm:text-xs md:text-sm lg:text-sm 2xl:text-base 2xl:w-60 lg:w-50 md:w-40"
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="AGRC">Agriculture Customer</option>
                  <option value="COM">Commercial Customer</option>
                  <option value="DOM">Domestic Customer</option>
                  <option value="GPBS">General Purpose Bulk Supply</option>
                  <option value="HTCI">
                    Hight Tension(Continuous Industries)
                  </option>
                  <option value="HTDSI">
                    High Tension(Double Shift Industries)
                  </option>
                  <option value="HTSSI">
                    High Tension(Single Shift Industries)
                  </option>
                  <option value="HTPHE">High Tension-PHE</option>
                  <option value="LTIND">Low Tension Industries</option>
                  <option value="LTPHE">Low Tension PHE</option>
                  <option value="PININD">Power Intensive Industry</option>
                  <option value="STRLGHT">Public Street Lighting</option>
                </select>
              </div>

              <div className="flex justify-center items-center">
                {categoryError && (
                  <p className="text-red-600 text-xs font-semibold pt-2 sm:text-xs md:text-sm lg:text-xs 2xl:text-xs">
                    {categoryError}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="">
              <label
                className="block text-[#2B3674] text-center text-xs font-bold mb-1 sm:text-xs md:text-sm lg:text-base 2xl:text-base lg:mb-2 2xl:mb-2"
                htmlFor="load"
              >
                Enter the Load{' '}
                <span className="text-red-500 font-extrabold text-base">*</span>
              </label>
              <div className="flex justify-center items-center">
                <input
                  className="shadow appearance-none border rounded py-3 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-24 md:w-24 lg:w-60 2xl:w-60 border-gray-300"
                  id="load"
                  onChange={handleLoadChange}
                  type="number"
                  min="1"
                  required
                />
                <input
                  className="shadow appearance-none border border-gray-300 rounded text-xs py-3.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-8 sm:w-12 md:w-12 lg:w-12 2xl:w-12"
                  id="kw"
                  type="text"
                  value={inputValue}
                  readOnly
                />
              </div>
              <div className="flex justify-center items-center">
                {loadError && (
                  <p className="text-red-600 text-xs font-semibold pt-2 sm:text-xs md:text-sm lg:text-xs 2xl:text-xs">
                    {loadError}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center p-4">
            <a
              href="#"
              onClick={onClickRes}
              className="w-auto sm:w-auto group bg-[#2B3674] hover:bg-white border border-transparent hover:border-[#2B3674] hover:text-[#2B3674] hover:shadow-lg hover:text-lg hover:font-bold focus:ring-none focus:outline-none focus:ring-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2"
            >
              <MdOutlineCalculate className="w-7 h-7 mr-3 group-hover:text-[#2B3674]" />
              <div className="text-left text-base font-semibold">Get Cost</div>
            </a>
          </div>
        </div>
        <div className="p-4 flex justify-center items-center">
          <div className="">
            <label
              className="block text-[#2B3674] text-center text-xs font-bold mb-1 sm:text-xs md:text-sm lg:text-base 2xl:text-base lg:mb-2 2xl:mb-2"
              htmlFor="load"
            >
              Amount
            </label>
            <div className="flex flex-col">
              <div className="flex-auto">
                <div className="relative flex flex-col">
                  <div className="relative flex-auto">
                    {
                      <input
                        className="shadow appearance-none border rounded py-3 px-3 text-base text-[#2B3674] leading-tight focus:outline-none focus:shadow-outline w-80 sm:w-60 md:w-70 lg:w-40 2xl:w-60"
                        id="load"
                        type="number"
                        value={res ? res : ''}
                        readOnly
                      />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="w-auto sm:w-auto group bg-[#2B3674] hover:bg-white border border-transparent hover:border-[#2B3674] hover:text-[#2B3674] hover:shadow-lg hover:text-lg hover:font-bold focus:ring-none focus:outline-none focus:ring-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2"
              onClick={handleAgreeClick}
            >
              <AiFillApi className="w-7 h-7 mr-3 group-hover:text-[#2B3674]" />
              <div className="text-left text-base font-semibold">Agree</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanctionLoadCalculator;

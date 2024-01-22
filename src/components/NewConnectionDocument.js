import React, { useState, useEffect, useRef } from 'react';
import { FaUpload } from 'react-icons/fa6';
import FileUploader from './FileUploader';

const Doc = ({ handleChange, handleSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Update the state with the selected file
    setSelectedFile(file);
  };

  const [selectedFiles, setSelectedFiles] = useState([]);
  const changeListContent = (category) => {
    // no changes in list content
    return;
  };

  const getContentMessage = () => {
    switch (selectedCategory) {
      case 'owner':
        return 'A copy of registered sales deed or lease deed';
      case 'tenant':
        return 'A copy of rent agreement';
      default:
        return '';
    }
  };

  return (
    <div className="grid grid-row-2 gap-4">
      <div>
        <div className="flex justify-center rounded overflow-hidden m-4 mb-2 border-2 border-gray-200 bg-white">
          <div className="px-6 py-4">
            <div className="font-extrabold text-lg mb-2 text-[#2B3674] md:text-xl md:font-bold lg:text-2xl lg:font-semibold 2xl:text-2xl 2xl:font-semibold">
              Documents Required
            </div>
            <p className="text-[#707EAE] font-bold text-xs">
              Kindly adhere to the department submission guidelines. Department
              reserves right to reject the application with illegible supporting
              documents.
            </p>
            <hr className="h-0.5 border-none bg-[#707EAE] mt-4" />
            <p class="text-xs font-bold text-red-500 bg-red-100 p-2 mt-3 rounded">
              Please verify that the documents are accurately scanned, and
              ensure that the size of each document does not exceed 3 MB. The
              files for upload should be in either jpeg, jpg, png, or pdf
              formats.
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center rounded border border-blue-900 mx-4 pl-8 bg-white mb-4">
          <div className="pt-6 pl-2 sm:pl-2 md:pl-4 lg:pl-6">
            <ul className="list-decimal text-[#2B3674]">
              <li className="text-sm sm:text-sm md:text-base">
                Mandatory Documents <i>(Applicable to all applicants)</i>
                <ul className="list-none text-[#2B3674] ml-8">
                  {/* passport size photograph */}
                  <li className="pt-2">
                    <div className="grid grid-cols-2 gap-8 sm:gap-4">
                      <div className="text-sm sm:text-sm md:text-base">
                        Passport size photograph
                        <span className="text-red-600 font-bold text-md">
                          *
                        </span>
                      </div>
                      <FileUploader />
                    </div>
                  </li>
                  {/* Proof of identity */}
                  <li className="pt-2 text-sm sm:text-sm md:text-base">
                    Proof of Identification
                    <ul className="items-center w-full text-sm font-medium text-[#2B3674]">
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value="ELection Identity Card"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            name="idProofType"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            ELection Identity Card{' '}
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value="Passport"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            name="idProofType"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            Passport{' '}
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value="Driving license"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            name="idProofType"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            Driving license{' '}
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value="Domicile certificate"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            name="idProofType"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            Domicile certificate
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            {' '}
                            PAN Card
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value="AADHAR"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            name="idProofType"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            {' '}
                            Aadhar Card
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            {' '}
                            Ration Card
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            {' '}
                            Photo identity card issued by Government Agency
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            {' '}
                            Photo certificate from village-level government
                            functionary (e.g., Pradhan, Patwari, Lekpal, VLW,
                            Chowkidar, Primary school Teacher, Health center
                            Incharge, etc.).
                          </label>
                        </div>
                      </li>
                    </ul>
                    {/* document id */}
                    <div className="pb-4 pl-6">
                      <label
                        className="block text-[#2B3674] text-xs font-bold mb-1 text-left"
                        htmlFor="doc-id"
                      >
                        Document ID
                        <span className="text-red-500 font-extrabold text-base">
                          *
                        </span>
                      </label>
                      <div className="grid grid-cols-2 gap-6 sm:gap-4">
                        <div>
                          <input
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            name="idProofNumber"
                            className="shadow appearance-none border rounded py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 sm:w-48 md:w-80 lg:w-80 placeholder:text-xs"
                            id="doc-id"
                            type="text"
                            placeholder="Enter document number"
                            required
                          />
                        </div>
                        <FileUploader />
                      </div>
                    </div>
                  </li>

                  {/* Proof of Ownership */}
                  <li className="pt-2 text-sm sm:text-sm md:text-base">
                    Proof of Ownership or occupancy of premise
                    <div className="grid grid-cols-2 my-4 pl-3">
                      <div className="flex items-center">
                        <input
                          id="po-general"
                          type="checkbox"
                          name="property-type"
                          className="w-3 h-3 text-[#2B3674] bg-gray-100 border-gray-300 rounded"
                          value="owner"
                          checked={selectedCategory === 'owner'}
                          onChange={() => {
                            changeListContent('owner');
                          }}
                          disabled // Disable the checkbox
                        />
                        <label
                          htmlFor="po-general"
                          className="ms-2 text-xs font-normal text-[#2B3674]"
                        >
                          <a href="#">Owner</a>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="po-tenant"
                          type="checkbox"
                          name="property-type"
                          className="w-3 h-3 text-[#2B3674] bg-gray-100 border-gray-300 rounded"
                          value="tenant"
                          checked={selectedCategory === 'tenant'}
                          onChange={() => {
                            changeListContent('tenant');
                          }}
                          disabled // Disable the checkbox
                        />
                        <label
                          htmlFor="po-tenant"
                          className="ms-2 text-xs font-normal text-[#2B3674]"
                        >
                          <a href="#">Tenant</a>
                        </label>
                      </div>
                    </div>
                    <ul className="items-center w-full text-sm font-medium text-[#2B3674]">
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            <label
                              htmlFor="horizontal-list-radio-license"
                              className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                            >
                              {getContentMessage()}
                            </label>
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            Registered General Power of Attorney
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            Municipal/ Panchayat tax receipt or Demand notice or
                            any other related document{' '}
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            Letter of allotment
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            {' '}
                            Copy of house registration certificate from
                            Panchayat or ownership certificate from Revenue
                            Authorities.
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            Other ownership document from local Government
                            Authority.
                          </label>
                        </div>
                      </li>
                    </ul>
                    {/* document id */}
                    <div className="pb-4 pl-6">
                      <label
                        className="block text-[#2B3674] text-xs font-bold mb-1 text-left"
                        htmlFor="doc-id"
                      >
                        Document ID
                        <span className="text-red-500 font-extrabold text-base">
                          *
                        </span>
                      </label>
                      <div className="grid grid-cols-2 gap-6 sm:gap-4">
                        <div>
                          <input
                            className="shadow appearance-none border rounded py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 sm:w-48 md:w-80 lg:w-80 placeholder:text-xs"
                            id="doc-id"
                            type="text"
                            placeholder="Enter document number"
                            required
                          />
                        </div>
                        <FileUploader />
                      </div>
                    </div>
                    {/* Mandatory for tenant */}
                    {selectedCategory === 'tenant' && (
                      <div className="grid grid-cols-2 gap-8 sm:gap-4">
                        <div className="flex justify-start items-center">
                          <p className="w-full py-2 ms-2 text-xs lg:text-sm font-normal">
                            {' '}
                            NOC from owner to obtain connection or Indemnity
                            bond
                            <span className="text-red-500 font-bold text-sm">
                              {' '}
                              *
                            </span>
                          </p>
                        </div>
                        <div className="flex justify-center items-center text-[#2B3674]  lg:text-xs">
                          <input
                            type="file"
                            style={{ display: 'none', fontSize: '10px' }}
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            multiple
                          />{' '}
                          <div className=" p-1.5 rounded-full bg-[#F4F7FE] lg:p-2">
                            <FaUpload
                              className="cursor-pointer"
                              onClick={handleUploadClick}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </li>
              {/* for selective consumers */}
              <li>
                For selective consumer categories
                <ul className="list-none pl-8">
                  <li>
                    <div className="flex items-center ps-3">
                      <input
                        id="horizontal-list-radio-license"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                      />
                      <label
                        for="horizontal-list-radio-license"
                        className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                      >
                        Industrial Consumers
                      </label>
                    </div>
                    <ul className="pl-12 items-center w-full text-xs font-medium text-[#2B3674]">
                      <li className="w-full">
                        <div className="flex justify-start items-center">
                          <p className="w-full py-2 mr-4 text-xs lg:text-sm font-normal">
                            Valid Industrial Licence, if applicable, along with
                            approval of the use of land for non-agricultural
                            purpose
                            <span className="italic">
                              (Not required for industrial consumers in notified
                              Industrial Areas)
                            </span>
                            <span className="text-red-500 font-bold text-sm">
                              {' '}
                              *
                            </span>
                          </p>
                        </div>
                        {/* document id */}
                        <div className="pb-4">
                          <label
                            className="block text-[#2B3674] text-xs font-bold mb-1 text-left"
                            htmlFor="doc-id"
                          >
                            Document ID
                          </label>
                          <div className="grid grid-cols-2 gap-6 sm:gap-4">
                            <div>
                              <input
                                className="shadow appearance-none border rounded py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 sm:w-48 md:w-80 lg:w-80 placeholder:text-xs"
                                id="doc-id"
                                type="text"
                                placeholder="Enter document number"
                                required
                              />
                            </div>
                            <FileUploader />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="flex items-center ps-3">
                      <input
                        id="horizontal-list-radio-license"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                      />
                      <label
                        for="horizontal-list-radio-license"
                        className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                      >
                        Partnership Firm
                      </label>
                    </div>
                    <ul className="pl-12 items-center w-full text-xs font-medium text-[#2B3674]">
                      <li className="w-full">
                        <div className="flex justify-start items-center">
                          <p className="w-full py-2 ms-2 text-xs lg:text-sm font-normal">
                            Partnership Deed
                            <span className="text-red-500 font-bold text-sm">
                              {' '}
                              *
                            </span>
                          </p>
                        </div>
                        {/* document id */}
                        <div className="pb-4">
                          <label
                            className="block text-[#2B3674] text-xs font-bold mb-1 text-left"
                            htmlFor="doc-id"
                          >
                            Document ID
                          </label>
                          <div className="grid grid-cols-2 gap-6 sm:gap-4">
                            <div>
                              <input
                                className="shadow appearance-none border rounded py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 sm:w-48 md:w-80 lg:w-80 placeholder:text-xs"
                                id="doc-id"
                                type="text"
                                placeholder="Enter document number"
                                required
                              />
                            </div>
                            <FileUploader />
                          </div>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex justify-start items-center">
                          <p className="w-full py-2 ms-2 text-xs lg:text-sm font-normal">
                            Authorization for signing the requisition form and
                            agreement
                            <span className="text-red-500 font-bold text-sm">
                              {' '}
                              *
                            </span>
                          </p>
                        </div>
                        {/* document id */}
                        <div className="pb-4">
                          <label
                            className="block text-[#2B3674] text-xs font-bold mb-1 text-left"
                            htmlFor="doc-id"
                          >
                            Document ID
                          </label>
                          <div className="grid grid-cols-2 gap-6 sm:gap-4">
                            <div>
                              <input
                                className="shadow appearance-none border rounded py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 sm:w-48 md:w-80 lg:w-80 placeholder:text-xs"
                                id="doc-id"
                                type="text"
                                placeholder="Enter document number"
                                required
                              />
                            </div>
                            <FileUploader />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="flex items-center ps-3">
                      <input
                        id="horizontal-list-radio-license"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                      />
                      <label
                        for="horizontal-list-radio-license"
                        className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                      >
                        {' '}
                        Public and/or Private Ltd Companies
                      </label>
                    </div>
                    <ul className="pl-12 items-center w-full text-xs font-medium text-[#2B3674]">
                      <li className="w-full">
                        <div className="flex justify-start items-center">
                          <p className="w-full py-2 ms-2 text-xs lg:text-sm font-normal">
                            Certificate of Incorporation
                            <span className="text-red-500 font-bold text-sm">
                              {' '}
                              *
                            </span>
                          </p>
                        </div>
                        {/* document id */}
                        <div className="pb-4">
                          <label
                            className="block text-[#2B3674] text-xs font-bold mb-1 text-left"
                            htmlFor="doc-id"
                          >
                            Document ID
                          </label>
                          <div className="grid grid-cols-2 gap-6 sm:gap-4">
                            <div>
                              <input
                                className="shadow appearance-none border rounded py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 sm:w-48 md:w-80 lg:w-80 placeholder:text-xs"
                                id="doc-id"
                                type="text"
                                placeholder="Enter document number"
                                required
                              />
                            </div>
                            <FileUploader />
                          </div>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex justify-start items-center">
                          <p className="w-full py-2 ms-2 text-xs lg:text-sm font-normal">
                            Memorandum
                            <span className="text-red-500 font-bold text-sm">
                              {' '}
                              *
                            </span>
                          </p>
                        </div>
                        {/* document id */}
                        <div className="pb-4">
                          <label
                            className="block text-[#2B3674] text-xs font-bold mb-1 text-left"
                            htmlFor="doc-id"
                          >
                            Document ID
                          </label>
                          <div className="grid grid-cols-2 gap-6 sm:gap-4">
                            <div>
                              <input
                                className="shadow appearance-none border rounded py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 sm:w-48 md:w-80 lg:w-80 placeholder:text-xs"
                                id="doc-id"
                                type="text"
                                placeholder="Enter document number"
                                required
                              />
                            </div>
                            <FileUploader />
                          </div>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex justify-start items-center">
                          <p className="w-full py-2 text-xs lg:text-sm font-normal">
                            Article of Association
                            <span className="text-red-500 font-bold text-sm">
                              {' '}
                              *
                            </span>
                          </p>
                        </div>
                        {/* document id */}
                        <div className="pb-4">
                          <label
                            className="block text-[#2B3674] text-xs font-bold mb-1 text-left"
                            htmlFor="doc-id"
                          >
                            Document ID
                          </label>
                          <div className="grid grid-cols-2 gap-6 sm:gap-4">
                            <div>
                              <input
                                className="shadow appearance-none border rounded py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 sm:w-48 md:w-80 lg:w-80 placeholder:text-xs"
                                id="doc-id"
                                type="text"
                                placeholder="Enter document number"
                                required
                              />
                            </div>
                            <FileUploader />
                          </div>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex justify-start items-center">
                          <p className="w-full py-2 mr-4 text-xs lg:text-sm font-normal">
                            Board Resolution for authorization
                            <span className="text-red-500 font-bold text-sm">
                              {' '}
                              *
                            </span>
                          </p>
                        </div>
                        {/* document id */}
                        <div className="pb-4">
                          <label
                            className="block text-[#2B3674] text-xs font-bold mb-1 text-left"
                            htmlFor="doc-id"
                          >
                            Document ID
                          </label>
                          <div className="grid grid-cols-2 gap-6 sm:gap-4">
                            <div>
                              <input
                                className="shadow appearance-none border rounded py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 sm:w-48 md:w-80 lg:w-80 placeholder:text-xs"
                                id="doc-id"
                                type="text"
                                placeholder="Enter document number"
                                required
                              />
                            </div>
                            <FileUploader />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="flex items-center ps-3">
                      <input
                        id="horizontal-list-radio-license"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                      />
                      <label
                        for="horizontal-list-radio-license"
                        className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                      >
                        Agricultural Consumers
                      </label>
                    </div>
                    <ul className="pl-12 items-center w-full text-xs font-medium text-[#2B3674]">
                      <li className="w-full">
                        <div className="flex justify-start items-center">
                          <p className="w-full py-2 mr-4 text-xs lg:text-sm font-normal">
                            No Objection Certificate from competent government
                            authority
                            <span className="text-red-500 font-bold text-sm">
                              {' '}
                              *
                            </span>
                          </p>
                        </div>
                        {/* document id */}
                        <div className="pb-4">
                          <label
                            className="block text-[#2B3674] text-xs font-bold mb-1 text-left"
                            htmlFor="doc-id"
                          >
                            Document ID
                          </label>
                          <div className="grid grid-cols-2 gap-6 sm:gap-4">
                            <div>
                              <input
                                className="shadow appearance-none border rounded py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 sm:w-48 md:w-80 lg:w-80 placeholder:text-xs"
                                id="doc-id"
                                type="text"
                                placeholder="Enter document number"
                                required
                              />
                            </div>
                            <FileUploader />
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul className="pl-12 items-center w-full text-sm font-medium text-[#2B3674]">
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            <label
                              htmlFor="horizontal-list-radio-license"
                              className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                            >
                              {getContentMessage()}
                            </label>
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            Registered General Power of Attorney
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            Municipal/ Panchayat tax receipt or Demand notice or
                            any other related document{' '}
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            Letter of allotment
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            {' '}
                            Copy of house registration certificate from
                            Panchayat or ownership certificate from Revenue
                            Authorities.
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center ps-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                          >
                            Other ownership document from local Government
                            Authority.
                          </label>
                        </div>
                      </li>
                      {/* document id */}
                      <div className="pb-4">
                        <label
                          className="block text-[#2B3674] text-xs font-bold mb-1 text-left"
                          htmlFor="doc-id"
                        >
                          Document ID
                        </label>
                        <div className="grid grid-cols-2 gap-6 sm:gap-4">
                          <div>
                            <input
                              className="shadow appearance-none border rounded py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 sm:w-48 md:w-80 lg:w-80 placeholder:text-xs"
                              id="doc-id"
                              type="text"
                              placeholder="Enter document number"
                              required
                            />
                          </div>
                          <FileUploader />
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <div className="flex items-center ps-3">
                      <input
                        id="horizontal-list-radio-license"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300"
                      />
                      <label
                        for="horizontal-list-radio-license"
                        className="w-full py-2 ms-2 text-xs lg:text-sm font-normal"
                      >
                        Non-Domestic Khokhas and temporary structures
                      </label>
                    </div>
                    <ul className="pl-12 items-center w-full text-xs font-medium text-[#2B3674]">
                      <li className="w-full">
                        <div className="flex justify-start items-center">
                          <p className="w-full py-2 mr-4 text-xs lg:text-sm font-normal">
                            No Objection Certificate for khokha or temporary
                            structure from the Nagar Nigam / Nagar Palika /
                            Nagar Panchayat / Gram Sabha / Gram Panchayat / Land
                            Development Authority / Land Owning Agency
                            <span className="text-red-500 font-bold text-sm">
                              {' '}
                              *
                            </span>
                          </p>
                        </div>
                        {/* document id */}
                        <div className="pb-4">
                          <label
                            className="block text-[#2B3674] text-xs font-bold mb-1 text-left"
                            htmlFor="doc-id"
                          >
                            Document ID
                          </label>
                          <div className="grid grid-cols-2 gap-6 sm:gap-4">
                            <div>
                              <input
                                className="shadow appearance-none border rounded py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 sm:w-48 md:w-80 lg:w-80 placeholder:text-xs"
                                id="doc-id"
                                type="text"
                                placeholder="Enter document number"
                                required
                              />
                            </div>
                            <FileUploader />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="text-red-600 font-bold text-xs bg-red-100 rounded-lg p-4 mr-8 my-4">
              <p>
                An NOC should be acquired from a relevant environmental
                authority when establishing a new industrial connection or
                adding load to an existing one. The same must be submitted to
                the distribution license provider to ensure compliance with
                pollution and environmental regulations
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => handleSubmit()}
                className="bg-[#2B3674] font-bold text-sm text-white rounded-lg px-8 py-3 mb-6"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Doc;

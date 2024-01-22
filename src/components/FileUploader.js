import React, { useState, useRef } from 'react';
import { FaUpload } from 'react-icons/fa';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'application/pdf'];

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && allowedFileTypes.includes(file.type)) {
      // Update the state with the selected file
      setSelectedFile(file);
    } else {
      // Display an alert for invalid file type
      alert('Invalid file type. Please select a JPEG, JPG, or PDF file.');
      // Reset the file input
      event.target.value = null;
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 text-[#2B3674] lg:text-xs">
      <div className="flex justify-center items-center md:justify-end md:items-end lg:justify-end lg:items-end 2xl:justify-end 2xl:items-end">
        <input
          type="file"
          style={{ display: 'none', fontSize: '10px' }}
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".jpg, .jpeg, .pdf"
          // Specify accepted file types using the accept attribute
        />
        <div className="p-1.5 rounded-full bg-[#F4F7FE] lg:p-2">
          <FaUpload
            className="cursor-pointer"
            onClick={handleUploadClick}
          />
        </div>
      </div>
      <div className="text-xs flex justify-center items-center pr-3 md:justify-center md:items-center md:text-sm lg:justify-center lg:items-center lg:text-sem 2xl:justify-center 2xl:items-center 2xl:text-sm">
        {selectedFile && (
          <input
            type="text"
            className="flex-row justify-center items-center text-blue-600 bg-gray-100 border-gray-300 focus:outline-0 overflow-wrap break-word max-w-[200px] focus:border-0"
            value={selectedFile.name}
            readOnly
          />
        )}
      </div>
    </div>
  );
};

export default FileUploader;

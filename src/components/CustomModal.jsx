import { useState } from 'react';

const CustomModal = ({ isOpen, onClose, width, children }) => {
  return (
    <div
      className={`fixed m-auto h-[80%] rounded-lg inset-0 z-50 overflow-auto ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div
          className={`fixed inset-0 transition-opacity ${
            isOpen ? 'ease-out opacity-100' : 'ease-in opacity-0'
          }`}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black opacity-75">close</div>
        </div>

        <div
          className={`relative p-8 bg-white  max-w-${width} mx-auto rounded-lg transition-transform transform ${
            isOpen ? 'ease-out scale-100' : 'ease-in scale-95'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;

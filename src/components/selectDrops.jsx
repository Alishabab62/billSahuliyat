// Dropdown.jsx
import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Dropdown = ({ label, items, onSelect }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [buttonWidth, setButtonWidth] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);
    const buttonRef = useRef();

    useEffect(() => {
        if (buttonRef.current) {
            setButtonWidth(buttonRef.current.getBoundingClientRect().width);
        }
    }, [isDropdownOpen]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSelect = (item) => {
        setSelectedItem(item);
        onSelect(item);
        setIsDropdownOpen(false);
    };

    return (
        <div>
            <div className="flex justify-center items-center">
                <button
                    ref={buttonRef}
                    id="dropdownDefaultButton"
                    onClick={toggleDropdown}
                    className="text-blue-500 bg-blue-100 border border-gray-300 border-r-0 focus:outline-none focus:ring-none font-medium rounded text-sm pl-4 pr-8 py-2 text-center inline-flex items-center focus:border-none"
                    type="button"
                >
                    {selectedItem || label}
                </button>
                <span><RiArrowDownSLine className="w-4 h-4 text-blue-500 -ml-6" onClick={toggleDropdown} /></span>
            </div>


            {isDropdownOpen && (
                <div
                    className={`z-10 absolute bg-white divide-y divide-gray-100 rounded shadow`}
                    style={{ width: buttonWidth }}
                >
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                        {items.map((item, index) => (
                            <li key={index}>
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50" onClick={() => handleSelect(item)}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;

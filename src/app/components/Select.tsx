'use client';

import React, { useState } from 'react';
import { ChevronDown, Clock } from 'lucide-react';

const InteractiveDropdownUI = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-64 font-sans">
      <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-1">
        Input Label
      </label>
      <div className="relative">
        <div 
          onClick={toggleDropdown}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white flex items-center justify-between cursor-pointer"
        >
          <span className="text-gray-400">
            <Clock className="h-5 w-5 inline mr-2" />
          </span>
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </div>
        
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {['Label', 'Label', 'Label', 'Label'].map((label, index) => (
              <div key={index} className="px-4 py-2 flex items-center">
                <input
                  type="checkbox"
                  id={`option-${index}`}
                  className="mr-2 form-checkbox h-4 w-4 text-blue-600"
                  defaultChecked={index === 0 || index === 3}
                />
                <label htmlFor={`option-${index}`}>{label}</label>
              </div>
            ))}
            <div className="flex border-t border-gray-200">
              <button className="flex-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-r border-gray-200">
                Clear
              </button>
              <button className="flex-1 px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveDropdownUI;

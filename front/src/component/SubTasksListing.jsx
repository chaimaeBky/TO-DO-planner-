import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

const SubTasksListing = ({ subtask }) => {
  const [isChecked, setIsChecked] = useState(() => {
    const saved = localStorage.getItem(`subtask-${subtask.id}`);
    return saved ? JSON.parse(saved) : false;
  });

  const toggleCheck = () => {
    setIsChecked((prev) => {
      localStorage.setItem(`subtask-${subtask.id}`, JSON.stringify(!prev));
      return !prev;
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg mb-2 max-w-sm w-full">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheck}
            className="w-5 h-5"
          />
          <h3
            className={`text-xl font-semibold ${
              isChecked ? 'line-through text-gray-400' : 'text-gray-800'
            }`}
          >
            {subtask.text}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SubTasksListing;

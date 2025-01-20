import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentDetails from './StudentDetails'; // Make sure the StudentDetails component is available
import { MdArrowForwardIos } from "react-icons/md";

const Departments = () => {
  const [departments, setDepartments] = useState(["Class 5", "Class 6", "Class 7", "Class 8","Class 9","Class 10"]); // Initial departments
  const [showPopup, setShowPopup] = useState(false);
  const [newDept, setNewDept] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(null); // state for selected department
  const navigate = useNavigate();

  // Handle adding a department
  const handleAddDepartment = () => {
    if (newDept.trim() !== "") {
      setDepartments([...departments, newDept]);
      setNewDept("");
      setShowPopup(false);
    }
  };

  const handleDepartmentClick = (dept) => {
    setSelectedDepartment(dept);
  };

  const handleBackClick = () => {
    setSelectedDepartment(null);
  };

  return (
    <div className="p-3 py-6">
      {!selectedDepartment ? (
        <>
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Departments</h1>
            <div className="flex items-center gap-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                onClick={() => setShowPopup(true)}
              >
                + Add Class
              </button>
            </div>
          </div>

          {/* Department Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow rounded flex items-center justify-between cursor-pointer h-[120px]"
                onClick={() => handleDepartmentClick(dept)} // Show department details
              >
                <span className="text-xl font-medium ps-5">{dept}</span>
                <div className="flex items-center text-xl gap-2 pe-5">
                  
                  <MdArrowForwardIos />
                </div>
                
              </div>
            ))}
          </div>

          {/* Popup Modal */}
          {showPopup && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 shadow-lg w-1/3">
                <h2 className="text-xl font-semibold mb-4">Add Class</h2>
                <input
                  type="text"
                  value={newDept}
                  onChange={(e) => setNewDept(e.target.value)}
                  placeholder="Enter Class"
                  className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none"
                />
                <div className="flex justify-end gap-2">
                  <button
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                    onClick={() => setShowPopup(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
                    onClick={handleAddDepartment}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div>
          {/* Back Button and Department Details */}
          <button
            className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={handleBackClick}
          >
            Back
          </button>
          <StudentDetails department={selectedDepartment} />
        </div>
      )}
    </div>
  );
};

export default Departments;

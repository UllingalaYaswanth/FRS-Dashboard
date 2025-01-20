import React, { useState,useRef } from 'react';
import { IoMdPersonAdd } from "react-icons/io";
import { FaFileImport } from "react-icons/fa";
const StudentDetails = ({ department }) => {
  const initialStudents = [
    {
      id: 1,
      department: 'Class 5',
      data: [
        { id: 12345, name: 'Sai Kumar', phone: '987654321', gender: 'Male', percentage: '90%' },
        { id: 12346, name: 'Vardhan', phone: '987654322', gender: 'Male', percentage: '97%' },
        { id: 12347, name: 'Jaswitha', phone: '987654323', gender: 'Female', percentage: '60%' },
        { id: 12348, name: 'Sagar Sai', phone: '987654324', gender: 'Male', percentage: '75%' },
        { id: 12349, name: 'Kushi', phone: '987654325', gender: 'Female', percentage: '76%' },
        { id: 12350, name: 'Sruthi', phone: '987654326', gender: 'Female', percentage: '85%' },
      ],
    },
      {
        id: 2,
        department: 'Class 6',
        data: [

          { id: 12348, name: 'Sagar Sai', phone: '987654324', gender: 'Male', percentage: '75%' },
          { id: 12349, name: 'Kushi', phone: '987654325', gender: 'Female', percentage: '76%' },
          { id: 12350, name: 'Sruthi', phone: '987654326', gender: 'Female', percentage: '85%' },
        ],
      },
      {
        id: 3,
        department: 'Class 7',
        data: [
          { id: 12345, name: 'Sai Kumar', phone: '987654321', gender: 'Male', percentage: '90%' },
          { id: 12346, name: 'Vardhan', phone: '987654322', gender: 'Male', percentage: '97%' },
          { id: 12347, name: 'Jaswitha', phone: '987654323', gender: 'Female', percentage: '60%' },
          { id: 12348, name: 'Sagar Sai', phone: '987654324', gender: 'Male', percentage: '75%' },

        ],
      },
      {
        id: 4,
        department: 'Class 8',
        data: [
          { id: 12345, name: 'Sai Kumar', phone: '987654321', gender: 'Male', percentage: '90%' },
          { id: 12346, name: 'Vardhan', phone: '987654322', gender: 'Male', percentage: '97%' },
          { id: 12347, name: 'Jaswitha', phone: '987654323', gender: 'Female', percentage: '60%' },
          { id: 12348, name: 'Sagar Sai', phone: '987654324', gender: 'Male', percentage: '75%' },
          { id: 12349, name: 'Kushi', phone: '987654325', gender: 'Female', percentage: '76%' },
          { id: 12350, name: 'Sruthi', phone: '987654326', gender: 'Female', percentage: '85%' },
        ],
      },
      {
        id: 5,
        department: 'Class 9',
        data: [
          { id: 12345, name: 'Sai Kumar', phone: '987654321', gender: 'Male', percentage: '90%' },
          { id: 12346, name: 'Vardhan', phone: '987654322', gender: 'Male', percentage: '97%' },
          { id: 12347, name: 'Jaswitha', phone: '987654323', gender: 'Female', percentage: '60%' },
          { id: 12348, name: 'Sagar Sai', phone: '987654324', gender: 'Male', percentage: '75%' },
          { id: 12349, name: 'Kushi', phone: '987654325', gender: 'Female', percentage: '76%' },
          { id: 12350, name: 'Sruthi', phone: '987654326', gender: 'Female', percentage: '85%' },
        ],
      },
      {
        id: 6,
        department: 'Class 10',
        data: [
          { id: 12345, name: 'Sai Kumar', phone: '987654321', gender: 'Male', percentage: '90%' },
          { id: 12346, name: 'Vardhan', phone: '987654322', gender: 'Male', percentage: '97%' },
          { id: 12347, name: 'Jaswitha', phone: '987654323', gender: 'Female', percentage: '60%' },
          { id: 12348, name: 'Sagar Sai', phone: '987654324', gender: 'Male', percentage: '75%' },
          { id: 12349, name: 'Kushi', phone: '987654325', gender: 'Female', percentage: '76%' },
          { id: 12350, name: 'Sruthi', phone: '987654326', gender: 'Female', percentage: '85%' },
        ],
      },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    id: '',
    name: '',
    phone: '',
    gender: '',
    percentage: '',
  });

  const departmentStudents = students.find((s) => s.department === department);

  const fileInputRef = useRef(null);

  // Trigger the file input when the icon is clicked
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  // Handle Search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtered Students
  const filteredStudents =
    departmentStudents.data.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toString().includes(searchTerm) ||
        student.phone.toString().includes(searchTerm) ||
        student.percentage.toString().includes(searchTerm)
    ) 

  // Handle Form Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add Student
  const handleAddStudent = (e) => {
    e.preventDefault();
    const updatedStudents = {
      ...departmentStudents,
      data: [...departmentStudents.data, { ...newStudent, id: Date.now() }],
    };

    setStudents((prev) =>
      prev.map((s) => (s.department === department ? updatedStudents : s))
    );
    setShowModal(false);
    setNewStudent({ id: '', name: '', phone: '', gender: '', percentage: '' });
  };

  return (
    <div>


      {/* Search and Add Student */}
      <div className="flex justify-between items-center mb-4">
      <h1 className="text-xl ">
      Department <span className='font-semibold'>{department}</span> 
      </h1>
      <div className='space-x-4 flex items-center'>
        <input
          type="text"
          placeholder="Search students"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded px-4 py-2"
        />
        <div className='px-3 text-xl cursor-pointer' title='Import Students'>
        <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={(e) => console.log(e.target.files[0])}
      />
      
      <FaFileImport
        className="text-blue-500 text-xl cursor-pointer"
        onClick={handleIconClick} // Trigger file input on click
      />
        </div>
       
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
        >
        <IoMdPersonAdd />
          Add Student
        </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-200 bg-white rounded-lg shadow mt-8">
        <thead className='bg-gray-100'>
          <tr>
            <th className="border border-gray-300 p-2 py-3">Student ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Phone Number</th>
            <th className="border border-gray-300 p-2">Gender</th>
            <th className="border border-gray-300 p-2">Percentage</th>
            <th className="border border-gray-300 p-2">Edit</th>
            <th className="border border-gray-300 p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id} className='text-center font-semibold'>
              <td className="border border-gray-300 p-2">{student.id}</td>
              <td className="border border-gray-300 p-2">{student.name}</td>
              <td className="border border-gray-300 p-2">{student.phone}</td>
              <td className="border border-gray-300 p-2">{student.gender}</td>
              <td className="border border-gray-300 p-2">{student.percentage}</td>
              <td className="border border-gray-300 p-2">
                <button className="px-2 py-1 bg-green-500 text-white rounded">Edit</button>
              </td>
              <td className="border border-gray-300 p-2">
                <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Add New Student</h2>
            <form onSubmit={handleAddStudent}>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newStudent.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={newStudent.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Gender</label>
                <select
                  name="gender"
                  value={newStudent.gender}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Percentage</label>
                <input
                  type="text"
                  name="percentage"
                  value={newStudent.percentage}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;

// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// // Import Heroicons
// import { UsersIcon, CheckCircleIcon, ClockIcon, XCircleIcon } from '@heroicons/react/24/solid';

// // Register the required Chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const AttendanceStats = () => {
//   const data = {
//     labels: ['Present', 'Absent'],
//     datasets: [
//       {
//         data: [37, 9],
//         backgroundColor: ['#5CD85A', '#FC2E20'],
//         hoverBackgroundColor: ['#10BC10', '#FF4500'],
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false, // Disable default legend
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
//       {/* Header */}
//       <header className="w-full  flex justify-between items-center bg-white p-4 shadow-md rounded mb-4">
//         <h1 className="text-xl font-bold text-gray-700">Statistics &gt;&gt; Daily</h1>
//         <div className="flex items-center space-x-4">
//           <select className="border border-gray-300 rounded px-3 py-2 text-gray-600">
//           <option value="">Select Class</option>
//             <option>Class 5</option>
//             <option>Class 6</option>
//             <option>Class 7</option>
//           </select>
//           <input
//             type="date"
//             className="border border-gray-300 rounded px-3 py-2 text-gray-600"
//             defaultValue="2023-05-12"
//           />
//         </div>
//       </header>

//       {/* Navigation */}
//       <div className="w-full flex justify-between mb-6">
//         <button className="bg-[#F6A21E] text-white px-6 py-2 rounded shadow-md hover:bg-[#FDB750]">
//           &lt;&lt; Prev
//         </button>
//         <button className="bg-[#F6A21E] text-white px-6 py-2 rounded shadow-md hover:bg-[#FDB750]">
//           Next &gt;&gt;
//         </button>
//       </div>

//       {/* Statistics Cards */}
//       <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <div className="bg-[#FF9636] text-gray-800 p-6 rounded shadow-md flex items-center w-full">
//           <UsersIcon className="w-14 h-14 text-white mr-4" />
//           <div>
//             <h2 className="text-4xl font-bold">46</h2>
//             <p className="text-lg">Total Registrations</p>
//           </div>
//         </div>
//         <div className="bg-[#FF9636] text-gray-800 p-6 rounded shadow-md flex items-center w-full">
//           <CheckCircleIcon className="w-14 h-14 text-white mr-4" />
//           <div>
//             <h2 className="text-4xl font-bold">37</h2>
//             <p className="text-lg">Present</p>
//           </div>
//         </div>
//         <div className="bg-[#FF9636] text-gray-800 p-6 rounded shadow-md flex items-center w-full">
//           <ClockIcon className="w-14 h-14 text-white mr-4" />
//           <div>
//             <h2 className="text-4xl font-bold">0</h2>
//             <p className="text-lg">Late</p>
//           </div>
//         </div>
//         <div className="bg-[#FF9636] text-gray-800 p-6 rounded shadow-md flex items-center w-full">
//           <XCircleIcon className="w-14 h-14 text-white mr-4" />
//           <div>
//             <h2 className="text-4xl font-bold">9</h2>
//             <p className="text-lg">Absent</p>
//           </div>
//         </div>
//       </div>

//       {/* Chart and Export Buttons */}
//       <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//         {/* Chart */}
//         <div className="bg-white p-6 shadow-md rounded flex flex-col">
//           <h2 className="text-lg font-bold text-gray-700 mb-6">Attendance Chart By Status</h2>
//           <div className="flex h-full items-center gap-x-16">
//             <div className="w-1/2 flex justify-center">
//               <Pie data={data} options={options} />
//             </div>
//             <div className="w-1/2 flex flex-col justify-center space-y-4">
//               <div className="flex items-center space-x-3">
//                 <div className="w-4 h-4 bg-[#5CD85A] rounded"></div>
//                 <span className="text-gray-700 font-medium">  Present</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <div className="w-4 h-4 bg-[#FF4500] rounded"></div>
//                 <span className="text-gray-700 font-medium">Absent</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 shadow-md rounded flex flex-col h-[440px] space-y-6">
//           <h2 className="text-lg font-bold text-gray-700">Export Attendance Data</h2>
//           <div className="flex items-center justify-between border border-gray-300 rounded p-3">
//             <div className="flex items-center space-x-3">
//               <UsersIcon className="w-5 h-5 text-blue-600" />
//               <span className="text-gray-700 font-medium">Present:</span>
//             </div>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600">
//               Export
//             </button>
//           </div>
//           <div className="flex items-center justify-between border border-gray-300 rounded p-3">
//             <div className="flex items-center space-x-3">
//               <ClockIcon className="w-5 h-5 text-orange-500" />
//               <span className="text-gray-700 font-medium">Late:</span>
//             </div>
//             <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-orange-600">
//               Export
//             </button>
//           </div>
//           <div className="flex items-center justify-between border border-gray-300 rounded p-3">
//             <div className="flex items-center space-x-3">
//               <XCircleIcon className="w-5 h-5 text-red-500" />
//               <span className="text-gray-700 font-medium">Absent:</span>
//             </div>
//             <button className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-600">
//               Export
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AttendanceStats;

import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Import Heroicons
import { UsersIcon, CheckCircleIcon, ClockIcon, XCircleIcon } from '@heroicons/react/24/solid';

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const AttendanceStats = () => {
  const [selectedClass, setSelectedClass] = useState('Class 5');
  const [attendanceStats, setAttendanceStats] = useState({
    totalRegistrations: 0,
    present: 0,
    late: 0,
    absent: 0,
  });

  const [chartData, setChartData] = useState({
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ['#5CD85A', '#FC2E20'],
        hoverBackgroundColor: ['#10BC10', '#FF4500'],
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable default legend
      },
    },
  };

  // Simulate API call to fetch data
  const fetchDataForClass = (className) => {
    // Replace with actual API call
    const mockData = {
      'Class 5': { totalRegistrations: 50, present: 40, late: 5, absent: 5 },
      'Class 6': { totalRegistrations: 45, present: 37, late: 3, absent: 5 },
      'Class 7': { totalRegistrations: 40, present: 30, late: 2, absent: 8 },
    };
    return mockData[className] || { totalRegistrations: 0, present: 0, late: 0, absent: 0 };
  };

  // Update data when the selected class changes
  useEffect(() => {
    if (selectedClass) {
      const data = fetchDataForClass(selectedClass);
      setAttendanceStats(data);

      setChartData({
        labels: ['Present', 'Absent'],
        datasets: [
          {
            data: [data.present, data.absent],
            backgroundColor: ['#5CD85A', '#FC2E20'],
            hoverBackgroundColor: ['#10BC10', '#FF4500'],
          },
        ],
      });
    }
  }, [selectedClass]);

  return (
    <div className="min-h-screen flex flex-col items-center p-2 py-4">
      {/* Header */}
      <header className="w-full flex justify-between items-center bg-white p-4 shadow-md rounded mb-4">
        <h1 className="text-xl font-bold text-gray-700">Statistics &gt;&gt; Daily</h1>
        <div className="flex items-center space-x-4">
          <select
            className="border border-gray-300 rounded px-3 py-2 text-gray-600"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Select Class</option>
            <option value="Class 5">Class 5</option>
            <option value="Class 6">Class 6</option>
            <option value="Class 7">Class 7</option>
          </select>
          <input
            type="date"
            className="border border-gray-300 rounded px-3 py-2 text-gray-600"
            defaultValue="2023-05-12"
          />
        </div>
      </header>

      {/* Navigation */}
      <div className="w-full flex justify-between mb-6">
        <button className="bg-[#F6A21E] text-white px-6 py-2 rounded shadow-md hover:bg-[#FDB750]">
          &lt;&lt; Prev
        </button>
        <button className="bg-[#F6A21E] text-white px-6 py-2 rounded shadow-md hover:bg-[#FDB750]">
          Next &gt;&gt;
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#FF9636] text-gray-800 p-6 rounded shadow-md flex items-center w-full">
          <UsersIcon className="w-14 h-14 text-white mr-4" />
          <div>
            <p className="text-lg font-medium text-white">Total Registrations</p>
            <h2 className="text-4xl font-bold text-white">{attendanceStats.totalRegistrations}</h2>
            
          </div>
        </div>
        <div className="bg-[#FF9636] text-gray-800 p-6 rounded shadow-md flex items-center w-full">
          <CheckCircleIcon className="w-14 h-14 text-white mr-4" />
          <div>
          <p className="text-lg font-medium text-white">Present</p>
            <h2 className="text-4xl font-bold text-white">{attendanceStats.present}</h2>
           
          </div>
        </div>
        <div className="bg-[#FF9636] text-gray-800 p-6 rounded shadow-md flex items-center w-full">
          <ClockIcon className="w-14 h-14 text-white mr-4" />
          <div>
          <p className="text-lg font-medium text-white">Late</p>
            <h2 className="text-4xl font-bold text-white">{attendanceStats.late}</h2>
          
          </div>
        </div>
        <div className="bg-[#FF9636] text-gray-800 p-6 rounded shadow-md flex items-center w-full">
          <XCircleIcon className="w-14 h-14 text-white mr-4" />
          <div>
          <p className="text-lg font-medium text-white">Absent</p>
            <h2 className="text-4xl font-bold text-white">{attendanceStats.absent}</h2>
           
          </div>
        </div>
      </div>

      {/* Chart and Export Buttons */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Chart */}
        <div className="bg-white p-6 shadow-md rounded flex flex-col">
          <h2 className="text-lg font-bold text-gray-700 mb-6">Attendance Chart By Status</h2>
          <div className="flex h-full items-center gap-x-16">
            <div className="w-1/2 flex justify-center">
              <Pie data={chartData} options={options} />
            </div>
            <div className="w-1/2 flex flex-col justify-center space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-[#5CD85A] rounded"></div>
                <span className="text-gray-700 font-medium">Present</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-[#FF4500] rounded"></div>
                <span className="text-gray-700 font-medium">Absent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Export Section */}
        <div className="bg-white p-6 shadow-md rounded flex flex-col h-[440px] space-y-6">
          <h2 className="text-lg font-bold text-gray-700">Export Attendance Data</h2>
          {/* Export Buttons */}
          <div className="flex items-center justify-between border border-gray-300 rounded p-3">
            <div className="flex items-center space-x-3">
              <UsersIcon className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Present:</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600">
              Export
            </button>
          </div>
          <div className="flex items-center justify-between border border-gray-300 rounded p-3">
            <div className="flex items-center space-x-3">
              <ClockIcon className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700 font-medium">Late:</span>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-orange-600">
              Export
            </button>
          </div>
          <div className="flex items-center justify-between border border-gray-300 rounded p-3">
            <div className="flex items-center space-x-3">
              <XCircleIcon className="w-5 h-5 text-red-500" />
              <span className="text-gray-700 font-medium">Absent:</span>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-600">
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceStats;

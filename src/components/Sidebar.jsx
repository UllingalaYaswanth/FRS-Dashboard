// import React, { useState } from 'react'
// import { LuBox, LuUser, LuLogOut} from 'react-icons/lu'
// import {Link} from 'react-router-dom'
// import logo from '../assets/images/logo.jpeg'

// function Sidebar() {
//   const [activeLink, setActiveLink] = useState(0);
//   const handleLinkClick = (index) =>{
//     setActiveLink(index)
//   }
//     const SIDEBAR_LINKS = [
//         { id:1, path:'/', name:"Dashboard", icon:LuBox},
//         { id:2, path:'/statistics', name:"Statistics", icon:LuUser},
//         { id:3, path:'/department', name:"Department", icon:LuUser},
        
//     ]
//   return (
//     <div className='w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white'>
//         <div className='mb-6 mt-4 items-center flex justify-center'>
//           <img src={logo} className='w-9 flex'/>
//           <h1 className='text-3xl ml-3 hidden md:flex'>Intelliod</h1>
//         </div>
//         <ul className='mt-12 space-y-4'>
//           {
//             SIDEBAR_LINKS.map((link,index) =>(
//               <li key={index} className={`font-medium rounded-md px-5 hover:bg-gray-200 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-200 text-indigo-500": ""}`} >
//                 <Link to={link.path} className='flex items-center md:space-x-5 justify-center md:justify-start py-3'
//                 onClick={() => handleLinkClick(index)}
//                 >
//                 <span >{link.icon()}</span>
//                 <span className='text-sm text-gray-500 hidden md:flex'>{link.name}</span>
//                 </Link>
//               </li>
//             ))
//           }
//         </ul>
//         <div className='absolute bottom-5 left-5 cursor-pointer text-center py-2 px5'>
//           <p className='flex items-center space-x-2 text-md text-gray-800 hover:bg-gray-100 hover:text-indigo-500 py-2 px-4 rounded-md justify-center md:justify-start'>
//             <LuLogOut className='flex'/>
//             <span className='hidden md:flex pe-20 text-gray-500'>Logout</span>
//           </p>
//         </div>
//     </div>
//   )
// }

// export default Sidebar

import React, { useState, useEffect } from 'react'
import { LuBox, LuChartBar, LuBuilding,LuLogOut } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.jpeg'

function Sidebar() {
  // Get the current location from the router
  const location = useLocation();

  // Set the initial active link based on the current path
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    // Check the current path and set active link based on it
    const path = location.pathname;
    const activeIndex = SIDEBAR_LINKS.findIndex((link) => link.path === path);
    if (activeIndex !== -1) {
      setActiveLink(activeIndex);
    } else {
      // If no matching path, default to the first link
      setActiveLink(0);
    }
  }, [location.pathname]); // This effect runs whenever the location changes

  const SIDEBAR_LINKS = [
    { id: 1, path: '/', name: 'Dashboard', icon: LuBox },         // Dashboard
    { id: 2, path: '/statistics', name: 'Statistics', icon: LuChartBar }, // Statistics
    { id: 3, path: '/department', name: 'Department', icon: LuBuilding }, // Department
  ];

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className='w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white'>
      <div className='mb-6 mt-4 items-center flex justify-center'>
        <img src={logo} className='w-9 flex' alt="logo" />
        <h1 className='text-3xl ml-3 hidden md:flex'>Intelliod</h1>
      </div>
      <ul className='mt-12 space-y-4'>
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md px-5 hover:bg-gray-200 hover:text-indigo-500 ${activeLink === index ? 'bg-indigo-200 text-indigo-500' : ''}`}
          >
            <Link
              to={link.path}
              className='flex items-center md:space-x-5 justify-center md:justify-start py-3'
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className='text-sm text-gray-500 hidden md:flex'>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className='absolute bottom-5 left-5 cursor-pointer text-center py-2 px-5'>
        <p className='flex items-center space-x-2 text-md text-gray-800 hover:bg-gray-100 hover:text-indigo-500 py-2 px-4 rounded-md justify-center md:justify-start'>
          <LuLogOut className='flex' />
          <span className='hidden md:flex pe-16 text-gray-500'>Logout</span>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;

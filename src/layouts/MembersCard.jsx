import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function MembersCard({members}) {
  return (
    <div className='p-6 bg-white rounded-xl space-y-5'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>{members.count}</h1>
        <p className='text-2xl cursor-pointer'>
        <MdOutlineKeyboardArrowRight/>
        </p>
      </div>
      <div className='space-y-1'>
        <h1 className='text-sm text-gray-500'>{members.role}</h1>
        <div className='relative'>
          <img src='https://wallpapercave.com/wp/wp7346640.png' alt='user 1' className='w-9 h-9 rounded-full border-2 border-white-400'/>
          <img src='https://wallpapercave.com/wp/wp7346640.png' alt='user 1' className='w-9 h-9 rounded-full border-2 border-white-400 top-0 left-4 absolute'/>
          <img src='https://wallpapercave.com/wp/wp7346640.png' alt='user 1' className='w-9 h-9 rounded-full border-2 border-white-400 top-0 left-8 absolute'/>
          <img src='https://wallpapercave.com/wp/wp7346640.png' alt='user 1' className='w-9 h-9 rounded-full border-2 border-white-400 top-0 left-12 absolute'/> 
        </div>
      </div>
    </div>
  )
}

export default MembersCard
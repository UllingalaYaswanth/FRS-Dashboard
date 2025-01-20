import React from 'react'
import {GoBell} from 'react-icons/go'
import profile from '../assets/images/profile.png'

function Header() {
  return (
    <div className='flex justify-between items-center p-4 bg-white shadow-sm p-5 rounded-md'>
      <div className=''>
        <h1 className='text-xs'>Welcome Back!</h1>
        <p className='text-lg font-semibold'>Alexia</p>
      </div>
      <div className='flex items-center space-x-5'>
        <div className='hidden md:flex'>
        </div>
        <div className='flex space-x-5 items-center'>
          <button className='relative text-2xl text-gray-600'>
            <GoBell size={26}/>
            <span className='absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-4 h-4 rounded-full'>9</span>
          </button>
          <img src={profile} className='w-10 h-10 rounded-full border-4 border-indigo-400 cursor-pointer'/>
        </div>
        
      </div>

    </div>
  )
}

export default Header
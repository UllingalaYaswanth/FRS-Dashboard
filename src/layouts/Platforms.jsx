import React from 'react'
import { CiGlobe} from 'react-icons/ci'
import {FaApple} from 'react-icons/fa'
import { DiAndroid } from 'react-icons/di'

function Platforms() {
  return (
    <div className='p-7 bg-white rounded-xl'>
      <div className='mb-3 mt-2'>
        <h1 className='font-bold'>Platform</h1>
      </div>
      <div className=' p-2 grid grid-cols-2 gap-8'>
        <div className='space-y-2 text-gray-500'>
          <h1 className='text-md font-bold'>58</h1>
          <p className='flex items-center space-x-3'>
            <CiGlobe/>
            <span>Website</span>
            </p>
        </div>
        <div className='space-y-2 text-gray-500'>
          <h1 className='text-md font-bold'>87</h1>
          <p className='flex items-center space-x-3'>
            <FaApple/>
            <span>IOS</span>
          </p>
        </div>
      </div>
      <div className=' p-2 grid grid-cols-2 gap-8 mt-10 text-gray-500'>
        <div className='space-y-2'>
          <h1 className='font-bold'>68</h1>
          <p className='flex items-center space-x-3'>
            <DiAndroid/>
            <span>Android</span>
          </p>
        </div>
        <div className='space-y-2 '>
          <h1 className='font-bold text-md'>58</h1>
          <p className='flex items-center space-x-3'>Tablets</p>
        </div>
      </div>
    </div>
  )
}

export default Platforms
import React from 'react'

function ClientCard({clint}) {
  return (
    <div className='bg-white rounded-xl space-y-5 gap-5 p-5'>
      <div className=''>
      <h1 className='text-2xl font-semibold'>{clint.company}</h1>
      <p className='text-sm text-gray-400 font-semibold'>{clint.role}</p>
      </div>
      <p className='text-xs text-gray-400'>{clint.time}</p>
    </div>
  )
}

export default ClientCard
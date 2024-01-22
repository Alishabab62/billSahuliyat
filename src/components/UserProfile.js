import React from 'react'

const UserProfile = ({data}) => {
  return (
    <div className='rounded-2xl bg-white inline-block p-4 md-full md:w-2/4'>
        <div className='py-1 flex justify-between'><span className='font-bold text-xl text-[#2B3674]'>Name:</span><span className='text-xl font-normal'> {data.name}</span></div>
        <div className='py-1 flex justify-between'><span className='font-bold text-xl text-[#2B3674]' >Consumer Code:</span><span className='text-xl font-normal'> {data.cCode}</span></div>
        <div className='py-1 flex justify-between'><span className='font-bold text-xl text-[#2B3674]'>Consumer Category:</span><span className='text-xl font-normal'> {data.cCategory}</span></div>
        <div className='py-1 flex justify-between'><span className='font-bold text-xl text-[#2B3674]'>Account Id:</span><span className='text-xl font-normal'> {data.acctId}</span></div>
        <div className='py-1 flex justify-between'><span className='font-bold text-xl text-[#2B3674]'>Phone:</span><span className='text-xl font-normal'> {data.phone}</span></div>
    </div>
  )
}

export default UserProfile
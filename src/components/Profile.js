import React, { useContext } from 'react'
import Header from './Header'
import UserName from './UserName'
import { SideContext } from '../utils/SidebarContext'

const Profile = () => {
  const {userDetails,address} = useContext(SideContext);
  if (userDetails === null) return;
  console.log(userDetails)
  return (
    <div className="w-screen p-10 bg-[#F4F7FE]">
      <Header path={"/profile"} name={"User Profile"}/>
      <div className='p-6 bg-white rounded-md'>
          <UserName name={userDetails.cname}/>
          <div className='flex flex-wrap mt-4'>
                <div className=' w-1/2 my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Consumer Code :</div><div className='w-1/2 text-black text-base '>{userDetails.consumerCode}</div></div>
                <div className='w-1/2 my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Installation Number :</div><div className='w-1/2 text-black text-base'>{userDetails.installationNumber}</div></div>

                <div className='w-1/2 my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Name :</div><div className='w-1/2 text-black text-base'>{userDetails.cname}</div></div>
                <div className='w-1/2 my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Category :</div><div className='w-1/2 text-black text-base'>{userDetails.category}</div></div>
                <div className='w-1/2 my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Parantage :</div><div className='w-1/2 text-black text-base'>{userDetails.parent}</div></div>
                <div className='w-1/2 my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Service Agreement ID :</div><div className='w-1/2 text-black text-base'>{userDetails.SAid}</div></div>
                <div className='w-1/2 my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Customer Type:</div><div className='w-1/2 text-black text-base'>{userDetails.custype}</div></div>
            

                <div className='w-1/2 my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Account ID:</div><div className='w-1/2 text-black text-base'>{userDetails.AcctId}</div></div>
                <div className='w-1/2 my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Service Start Date:</div><div className='w-1/2 text-black text-base'>{userDetails.SAstartDt}</div></div>
                <div className='w-1/2 my-1  flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Email:</div><div className='w-1/2 text-black text-base'>{address[2
                ]}</div></div>
                <div className='w-1/2 my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Sanction Load:</div><div className='w-1/2 text-black text-base'>{userDetails.sancLoad}</div></div>
                <div className='w-1/2 my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Phone :</div><div className='w-1/2 text-black text-base'>{userDetails.phone}</div></div>
                <div className='w-1/2 my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Feeder Name:</div><div className='w-1/2 text-black text-base'>{userDetails.feeder}</div></div>
                <div className='w-1/2 my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Distribution Transformer:</div><div className='w-1/2 text-black text-base'>{userDetails.DT}</div></div>
          </div>
      </div>
    </div>
  )
}

export default Profile
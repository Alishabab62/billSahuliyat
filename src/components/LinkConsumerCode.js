import React, { useState } from 'react'
import Header from './Header'
import { FaAsterisk, FaTrash } from 'react-icons/fa'

const LinkConsumerCode = () => {
  const [cCode,setCCode] = useState("");
  const [installationNumber,setInstallationNumber] = useState("");

const handleFormSubmit = () => {
    if(installationNumber === "" || cCode === "") {
        alert("please enter all required fields");
        return;
    }
}
    const linkConsumerData=[
        {
            conID:"3232323",
            instNumber:"300430",
            name:"Sharukh",
        },
        {
            conID:"463833",
            instNumber:"304300",
            name:"Sharukh",
        },
        {
            conID:"232397",
            instNumber:"3023200",
            name:"Sharukh",
        },
    ]
  return (
    <div className='w-screen p-10 bg-[#F4F7FE]'>
        <Header path={"Links"} name={"Link Customer ID"}/>
        <div className='md:flex justify-between w-full'>
            <div className='bg-white pt-4 pb-4 pl-7 pr-7 w-full rounded-2xl md:w-1/3 h-min'>
                <h3 className='font-bold text-3xl  mb-1 text-[#2B3674]'>Link Up</h3>
                <p className='text-sm mb-3 text-[#707EAE] font-normal'>Enter the required details to link a new user</p>
                <label className='flex text-center text-[#2B3674] text-xs'>Consumer Code <FaAsterisk className='text-red-600 text-[5px]'/></label>
                <input type='text' onChange={(e)=>setCCode(e.target.value)} value={cCode} className='border p-2 my-2 rounded-xl w-full'/>
                <label className='flex text-center text-[#2B3674] text-xs'>Installation Number <FaAsterisk className='text-red-600 text-[5px]'/></label>
                <input type='text' onChange={(e)=>setInstallationNumber(e.target.value)} value={installationNumber} className='border p-2 my-2 rounded-xl block w-full'/>
                <div className='flex justify-center mt-2'><button onClick={handleFormSubmit} className='bg-[#0d6efd] px-7 py-3 text-white rounded-xl text-xs'>Link User</button></div>
            </div>
            <div className='md:ml-10 mt-3 md:mt-0 w-full md:w-2/3 bg-white p-4 rounded-2xl h-min'>
                <h3 className='font-bold text-3xl  mb-1 text-[#2B3674]'>Previously Linked User</h3>
                <div className='mt-3 h-52 overflow-auto'>
                    <table className='border-collapse w-full'>
                        <thead>
                            <tr className='text-[#2B3674]'>
                                <th className='w-1/4 text-lg border border-gray-400 bg-gray-200 p-2'>Consumer ID</th>
                                <th className='w-1/4 text-lg border border-gray-400 bg-gray-200'>Installation Number</th>
                                <th className='w-1/4 text-lg border border-gray-400 bg-gray-200'>Name</th>
                                <th className='w-1/4 text-lg border border-gray-400 bg-gray-200'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            linkConsumerData ? linkConsumerData.map((d) => (
                            <tr key={d.conID} className='text-black even:bg-slate-100'>
                                <td className='w-1/4 text-base border border-b-gray-400 p-2 text-center rounded-md'>{d.conID}</td>
                                <td className='w-1/4 text-base border border-b-gray-400 text-center'>{d.instNumber}</td>
                                <td className='w-1/4 text-base border border-b-gray-400 text-center'>{d.name}</td>
                                <td className='w-1/4 text-base border border-b-gray-400 text-center'><FaTrash className='text-red-600 inline cursor-pointer'/></td>
                            </tr>
                            )) : <tr><td colSpan="4">No data available</td></tr>
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LinkConsumerCode
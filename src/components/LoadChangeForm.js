import React, { useState } from 'react'
import Header from './Header'
import { FaAsterisk } from 'react-icons/fa'

const LoadChangeForm = () => {
    let [inputs,setInputs] = useState({
        cCode:"",
        sLoad:"",
        rName:"",
        mNumber:"",
        address:"",
        tCategory:"",
        reason:""
    });
    const handleInputs = (e)=>{
        const {name,value} = e.target;
        setInputs((prevInputs)=>({
            ...prevInputs,[name]:value
        }));
    }
    const handleFormSubmit = () => {
        if(inputs.cCode === "" || inputs.sLoad === "" || inputs.rName === "" || inputs.mNumber === "" || inputs.address === "" || inputs.reason === ""){
            alert("Please enter all required fields");
            return;
        }
        window.location.href = "/load-change-upload";
    }
  return (
    <div className="w-screen p-10 bg-[#F4F7FE]">
        <Header path={"Load Change"} name={"Load change"}/>
        <div className=' p-2'>
            <div className='w-full md:w-2/3 m-auto'>
                <p className='text-sm mb-3 text-[#707EAE] font-bold'>Enhancement/Reduction</p>
                <p className='text-sm mb-3 text-[#707EAE] font-bold'>Enter the given required details</p>
                <div className='border mb-4 w-1/2'></div>
            </div>
            <div className='w-full md:w-2/3 m-auto  bg-white pt-4 pb-4 pl-7 pr-7'>
                <div >
                    <div className='md:flex justify-between w-full'>
                        <div className='w-1/2'>
                            <label className='flex text-center text-[#2B3674] text-xs'>Consumer Code <FaAsterisk className='text-red-500 text-[5px] '/></label>
                            <input type='text ' onChange={handleInputs} name='cCode' value={inputs.cCode}  className='border p-2 my-2 rounded-xl block w-full'/>
                        </div>
                        <div className='w-1/2 ml-2'>
                            <label className='flex text-center text-[#2B3674] text-xs'>Name of applicant/ organization <FaAsterisk className='text-red-500 text-[5px] '/></label>
                            <input type='text' onChange={handleInputs} name='sLoad' value={inputs.sLoad}  className='border p-2 my-2 rounded-xl block w-full'/>
                        </div>
                    </div>
                    <div className='md:flex justify-between w-full'>
                        <div className='w-1/2'>
                            <label className='flex text-center text-[#2B3674] text-xs'>Existing Load [KW / KV] <FaAsterisk className='text-red-500 text-[5px] '/></label>
                            <input type='text' onChange={handleInputs} name='rName' value={inputs.rName}  className='border p-2 my-2 rounded-xl block w-full'/>
                        </div>
                        <div className='w-1/2  ml-2'>
                            <label className='flex text-center w-full text-[#2B3674] text-xs'>Requested Load [KW / KV] <FaAsterisk className='text-red-500 text-[5px] '/></label>
                            <input type='tel'  onChange={handleInputs} name='mNumber' value={inputs.mNumber}  className='border p-2 my-2 rounded-xl block w-full'/>
                        </div>
                    </div>
                    <div className='md:flex justify-between w-full'>
                        <div className='w-1/2'>
                            <label className='flex text-center text-[#2B3674] text-xs'>Address <FaAsterisk className='text-red-500 text-[5px]'/></label>
                            <input type='text' onChange={handleInputs} name='address' value={inputs.address}    className='border p-2 my-2 rounded-xl block w-full'/>
                        </div>
                        <div className='w-1/2 ml-2'>
                            <label className='flex text-center text-[#2B3674] text-xs'>Mobile Number <FaAsterisk className='text-red-500 text-[5px]'/></label>
                            <input type='text' onChange={handleInputs} name='tCategory' value={inputs.tCategory}  className='border p-2 my-2 rounded-xl block w-full'/>
                        </div>
                    </div>
                    <div className='md:flex justify-between w-full'>
                        <div className='w-1/2'>
                            <label className='flex text-center text-[#2B3674] text-xs'>Reason<FaAsterisk className='text-red-500 text-[5px] '/></label>
                            <input type='text' onChange={handleInputs} name='reason' value={inputs.reason}   className='border p-2 my-2 rounded-xl block w-full'/>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'><button onClick={handleFormSubmit} className='bg-[#0d6efd] px-7 py-3 text-white rounded-xl text-sm'>Submit</button></div>
            </div>
        </div>
    </div>
  )
}

export default LoadChangeForm
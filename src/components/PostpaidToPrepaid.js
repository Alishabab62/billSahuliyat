import React from 'react'
import Header from './Header'

const PostpaidToPrepaid = () => {
    const handleSubmit = () => {
        window.location.href = '/postpaid-recharge';
    }
  return (
    <div className="w-screen p-10 bg-[#F4F7FE]">
        <Header path={"Postpaid"} name={"Postpaid to Prepaid"}/>
        <div className="border p-2 bg-white">
            <div className="w-full md:w-1/2 m-auto">
                {/* <h3 className='font-bold text-3xl  mb-1 text-[#2B3674]'>Postpaid to Prepaid Conversion</h3> */}
                <p className='text-sm mb-3 text-[#707EAE] font-normal'>In order to Convert to Prepaid, you need to clear your Postpaid Bill first.</p>
                <h3 className='mt-4 font-bold text-[#2B3674] text-xs mb-1'>Your Bill Due:</h3>
                <input type='number' value={100} className='border block p-2 rounded-xl'/>
                <button onClick={handleSubmit} className='bg-[#0d6efd] text-white relative left-12 mt-2 px-7 py-3 text-sm rounded-md'>Clear Bill</button>
            </div>
        </div>
    </div>
  )
}

export default PostpaidToPrepaid
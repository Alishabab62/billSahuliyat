import React from 'react'
import Header from './Header'

const PostpaidRecharge = () => {
    const handleSubmit = () => {

    }
  return (
    <div className="w-screen p-10 bg-[#F4F7FE]">
        <Header path={"Postpaid"} name={"Postpaid to Prepaid"}/>
        <div className="border p-2 bg-white">
            <div className="w-full md:w-1/2 m-auto">
                <h3 className='font-bold text-3xl  mb-1 text-[#2B3674]'>Congratulations</h3>
                <p className='text-sm mb-3 text-[#707EAE] font-normal'>Recharge Now to begin your prepaid journey.</p>
                <p className='mt-4 text-[#2B3674]'>You're elidgible for it with a minimum recharge of just <span className='font-bold'>Rs 500</span></p>
                <button onClick={handleSubmit} className='bg-[#0d6efd] text-white relative left-28 mt-2 px-7 py-3 text-sm rounded-md'>Recharge Now</button>
            </div>
        </div>
    </div>
  )
}

export default PostpaidRecharge
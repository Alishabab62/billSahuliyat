import React, { useState } from 'react'
import Header from './Header'
import {  FaAsterisk } from 'react-icons/fa'

const TrackRequestForm = () => {
  const [cCode,setCCode] = useState("");
  const [problem ,setProblem] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [firstmenu, setFirstMenu] = useState('');
  const [cCodeTrack,setCCodeTrack] = useState("");
  const [applicationId,setApplicationId] = useState("");

  const submenus = {
    "Bill": ['Bill Not generating', 'Bill incorrect', 'Usage / Read Incorrect'],
    "Payment": ['Not Able To pay', 'Payment Not reflecting', 'Payment against incorrect code'],
    "Access": ['Forgot Bill Shahuliyat Plus Password / username'],
    "Others": ['Please Specify in description box']
  };
  
  const handleOptionClick = (option) => {
    setShowSubmenu(true);
    setSelectedOption(submenus[option])
  };

  const handleFinalSubmission =(data) => {
    setShowMenu(false);
    setShowSubmenu(false);
    setFirstMenu(data)
  }

  const handleFormSubmitRaiseTicket = () => {
    if(cCode === "" || problem === ""){
      alert("please enter all required fields");
      return;
    }
  }

  const handleFormSubmitTrackTicket = () => {
    if(cCodeTrack === "" || applicationId === ""){
      alert("please enter all required fields");
      return;
    }
  }


  const  url = window.location.pathname;
  console.log(url);
  return (
    <div className=" p-10 bg-[#F4F7FE] h-screen" style={{width : url !== "/track-request" ? "100%" : "" }}>
      {url !== "/track-request" && <Header path={"Trackyourrequest"} name={"Track your request"}/>}
      <div className='md:flex justify-between'>
        <div className='w-full m:w-1/2 bg-white pt-4 pb-4 pl-7 pr-7 m-3 relative rounded-2xl'>
          <h3 className='font-bold text-3xl  mb-1 text-[#2B3674]'>Raise Ticket</h3>
          <p className=' text-sm mb-3 text-[#707EAE] font-normal'>Enter given required details</p>
          <label className='flex text-center text-[#2B3674] text-xs'>Consumer Code <FaAsterisk className='text-red-500 text-[5px]'/></label>
          <input type='text' onChange={(e)=>setCCode(e.target.value)} value={cCode}  className=' p-2 my-2 rounded-xl border block w-full'/>
          <label className='block text-[#2B3674] text-xs'>Select problem category:</label>

         <div
        className=" border p-2 pr-3 my-2 rounded-md block w-1/3 cursor-pointer text-[#707EAE] font-normal  text-sm"
      >   
          <div onClick={() => {setShowMenu(!showMenu); setShowSubmenu(false); firstmenu !== "" ? setFirstMenu("") : setFirstMenu(firstmenu)}} className='h-5 rounded-2xl overflow-hidden'>{firstmenu}</div>
          {showMenu &&<div className='hover:bg-grey' onClick={() => handleOptionClick('Bill')}>Bill  &#10140;</div>}
          {showMenu &&<div onClick={() => handleOptionClick('Payment')}>Payment  &#10140;</div>}
          {showMenu &&<div onClick={() => handleOptionClick('Access')}>Access  &#10140;</div>}
          {showMenu &&<div onClick={() => handleOptionClick('Others')}>Others  &#10140;</div>}
      </div>
      {showSubmenu && (
        <div  className="absolute top-60 left-64 bg-white border  p-2 rounded-md">
          {
            selectedOption.map((data,index)=>{
              return <div key={index} onClick={() => handleFinalSubmission(data)} className='cursor-pointer text-[#707EAE] font-normal  text-sm'>{data}  &#10140;</div>
            })
          }
        </div>
      )}
          <label className='block mb-2 text-[#2B3674] text-xs'>Describe your problem:</label>
          <textarea  onChange={(e)=>setProblem(e.target.value)}  value={problem} cols={50} rows={10} className=' border w-full p-2'></textarea>
          <div className='flex justify-center'><button onClick={handleFormSubmitRaiseTicket} className='bg-[#0d6efd] px-7 py-3 text-xs text-white rounded-xl'>Submit</button></div>
        </div>

        <div className='w-full md:w-1/2 bg-white ml-4 pt-4 pb-4 pl-7 pr-7 m-3 rounded-2xl'>
        <h3 className='font-bold text-3xl  mb-1 text-[#2B3674]'>Track Ticket</h3>
          <p className=' text-sm mb-3 text-[#707EAE] font-normal'>Enter given required details</p>
          <label className='flex text-center text-[#2B3674] text-xs'>Application ID <FaAsterisk className='text-red-500 text-[5px] '/></label>
          <input type='text' onChange={(e)=>setApplicationId(e.target.value)} value={applicationId}   className='border p-2 my-2 rounded-xl block w-full'/>
          <label className='flex text-center text-[#2B3674] text-xs'>Consumer Code <FaAsterisk className='text-red-500 text-[5px]'/></label>
          <input type='text' onChange={(e)=>setCCodeTrack(e.target.value)} value={cCodeTrack} className='border p-2 my-2 rounded-xl block w-full'/>
          <div className='flex justify-center'><button onClick={handleFormSubmitTrackTicket} className='bg-[#0d6efd] px-7 py-3 text-sm text-white rounded-xl'>Track</button></div>
        </div>
      </div>
    </div>
  )
}

export default TrackRequestForm
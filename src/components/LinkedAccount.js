import axios from 'axios';
import React, { useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { SideContext } from '../utils/SidebarContext';

const LinkedAccount = () => {
  const {setUserDetails,allConsumerCode} = useContext(SideContext);
  const navigate = useNavigate();

  const handleConsumerCode = (code) =>{
    const urlAccountDetails = "http://172.18.2.114:7020/soa-infra/resources/RESTKPDCL/custinformation!1.0/RestService/?consumerCode="+code;
    axios.get(urlAccountDetails).then((response) =>{
        console.log(response.data.results[0])
        setUserDetails(response.data.results[0])
        navigate("/");
    }).catch((error)=>{
        console.error(error)
    })
            
}
 if(allConsumerCode === null) return;


  return (
    <div className='w-full md:w-1/4 flex p-4 bg-white rounded-2xl md:ml-3 md-0 mt-3 md:mt-0'>
                <div className='ml-3'>
                    <h1 className='text-3xl text-[#2B3674] '>Linked Account</h1>
                    <div className='flex items-center'><FaUser className='text-[#0d6efd] text-3xl mr-1'/><h1 className='text-[#0d6efd] text-4xl'>{allConsumerCode.length}</h1></div>
                    <h1 className='text-xl text-[#0d6efd]'>Consumer Code</h1>
                    <select className='border-2 rounded-lg text-[#08244E]' onChange={(e)=>handleConsumerCode(e.target.value)}>
                        <option>Select Consumer Code</option>
                        {
                            allConsumerCode.map((code)=>{
                                return <option key={code.consumerCode}>{code.consumerCode}</option>
                            })
                        }
                    </select>
                </div>
            </div>
  )
}

export default LinkedAccount
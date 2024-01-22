import React, { useContext } from 'react'
import "./style.css"
import { FaPlusCircle, FaSignOutAlt, FaUser } from 'react-icons/fa'
import axios from 'axios'
import { SideContext} from '../utils/SidebarContext'
import { useNavigate, useParams } from 'react-router-dom'
import AddConsumer from './AddConsumer'
import { useState } from 'react'
import useConsumerCode from '../hooks/useConsumerCode'
import bgLanding from '../assests/landingImage.png'
import logo from '../assests/logo.png'

const LandingPage = () => {
    const [modal,setModal] = useState(false);
    const [consumerCode,setConsumerCode] = useState("");
    const {setUserDetails,allConsumerCode} = useContext(SideContext);
    const navigate = useNavigate();
    const {id,name} = useParams();
    useConsumerCode();

    const handleConsumerCode = (code) =>{
        const urlAccountDetails = "http://172.18.2.114:7020/soa-infra/resources/RESTKPDCL/custinformation!1.0/RestService/?consumerCode="+code;
        axios.get(urlAccountDetails).then((response) =>{
            console.log(response);
            setUserDetails(response?.data?.results[0])
            navigate("/");
        }).catch((error)=>{
            console.error(error)
        })        
    }

    const handleNewConnection =()=>{
        navigate("/new-connection-form");
    }

    const setModalFun = ()=>{
        setModal(false);
        setConsumerCode("");
    }

if(allConsumerCode === null) return null;


  return (
    <div className='w-full h-full bg-[#F4F7FE] relative center-absolute p-4'>
        {modal ? <AddConsumer fun={setModalFun} valFun={setConsumerCode} val={consumerCode} userID ={id}/> :
        <div>
        <div className='w-full flex justify-between items-center'>
    <img src={logo} alt='logo' className='w-3/12'/>
    
    <div className='w-full flex justify-end'>
        <h3 className='bg-[#0d6efd] text-[30px] font-bold text-[#F4F7FE] p-2 rounded-xl'>{name}</h3>
        <a href='http://c2mwbportal1.kpdcl.net:8888/webcenter/portal/billsahuliyat/pages_loginpage'rel='noreferrer'>
            <FaSignOutAlt className='text-red-500 text-5xl ml-2'/>
        </a>
    </div>
</div>

        <div className='flex w-full relative mt-4' >
            <div className='w-1/2'>
                <img src={bgLanding} alt='bg landing'/>
            </div>
            <div className='w-1/2 absolute right-0 top-24 flex flex-col items-center'>
                <div className='w-2/3 flex flex-col items-center'>
                    <div onClick={handleNewConnection} className='flex items-center justify-center rounded-2xl bg-white w-full mt-6 p-4'><h1 className='  text-[#08244E] text-[20px] font-bold'>APPLY FOR NEW CONNECTION</h1><FaPlusCircle className='text-[#0d6efd] text-2xl ml-2 cursor-pointer'/> </div>
                    <div className='flex items-center justify-center  rounded-2xl bg-white w-full mt-6 p-4'><h1 className=' text-[#08244E] text-[20px] font-bold' >ADD EXISTING CONSUMER CODE </h1><FaPlusCircle onClick={()=>setModal(true)} className='text-[#0d6efd] text-2xl ml-2 cursor-pointer'/> </div>
                </div>
                <div className=' bg-white mt-6 flex justify-between  w-2/3 p-5 flex-col flex-wrap rounded-2xl'>
                    <div className='flex'>
                        <FaUser className='text-[#0d6efd] w-[46px] h-[36px] ml-2'/>
                        <div className=''>
                            <h3 className='text-[#08244E] text-[20px] font-bold'>Linked Account</h3>
                            <span className='text-[#257DFF] text-[21px]'>{allConsumerCode.length}</span>
                        </div>
                    </div>
                    <div>
                        <label className='block text-[20px] text-[#08244E] font-bold'>Consumer Code</label>
                        <select className='border-2 h-10  rounded-lg text-[#257DFF] font-semibold text-xl w-full' onChange={(e)=>handleConsumerCode(e.target.value)}>
                            <option>Select Consumer Code</option>
                            {
                                allConsumerCode.map((code)=>{
                                    return <option>{code.consumerCode}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
        </div>}
    </div>
  )
}

export default LandingPage
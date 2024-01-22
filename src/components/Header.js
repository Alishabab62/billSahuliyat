import React, { useContext } from 'react'
import { FaBell, FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { SideContext } from '../utils/SidebarContext';

const Header = ({path,name}) => {
    const navigate = useNavigate();
    const{address} = useContext(SideContext);
    // console.log(address)
    function changeTabUrl(newUrl) {
      window.top.location.href = newUrl;
    }

    const navigateToLanding = ()=>{
      // navigate(`/landing/${address[0]}/${address[1]}`);
      changeTabUrl(`http://172.18.2.96:3000/landing/${address[0]}/${address[1]}`);
    }
  return (
    <div className='md:flex justify-between w-full py-4 px-2 '>
        <div>
            {/* <h3 className='text-xs font-medium leading-5 text-[#707EAE]'>Home/{path}</h3> */}
            <h1 className='font-bold text-3xl  leading-9 text-[#2B3674]'>{name}</h1>
        </div>
            {/* <div className='w-[100px] flex'><FaSignOutAlt onClick={naviagteToLanding} className='text-[#0d6efd] text-4xl mr-2 cursor-pointer'/><FaBell onClick={handleDashboardChange} className='text-4xl text-[#0d6efd] mr-2 cursor-pointer'/></div> */}
            <div className='w-[100px] flex'><FaSignOutAlt onClick={navigateToLanding} className='text-[#0d6efd] text-4xl mr-2 cursor-pointer'/></div>


    </div>
  )
}

export default Header
import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import {Outlet } from "react-router-dom";
import HamBurger from './HamBurger';
import  { SideContext } from '../utils/SidebarContext';


const Dashboard = () => {
  const {display,setDisplay} = useContext(SideContext);
  function handleSideBar(e){
    e.stopPropagation();
    setDisplay(false)
  }

  return (
    <div className='flex'  >
        <Sidebar dis = {display}/>
        <HamBurger fun={handleSideBar}/>
        <Outlet /> 
    </div>
  )
}

export default Dashboard
import React from 'react'
import Header from './Header'
import Switch from 'react-switch';
import { useState } from 'react';


const PaperLessBilling = () => {
  const [checked,setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <div className='w-screen p-10 bg-[#F4F7FE]'>
        <Header name={"Paper Less Billing"} path={"paperlessbilling"}/>
        <div className='flex justify-center h-full items-center'>
        <Switch
                onChange={handleChange}
                checked={checked}
                className="react-switch"
                id="normal-switch"
                offColor="#FF0101"
                onColor="#69C786"
              
            />
        </div>
    </div>
  )
}

export default PaperLessBilling
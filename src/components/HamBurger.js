import React from 'react'
import { FaBars } from 'react-icons/fa'

const HamBurger = ({fun}) => {

  
  return (
    <div><FaBars onClick={fun}  className='text-7xl text-[#0d6efd] p-5 md:hidden absolute top-80 '/></div>
  )
}

export default HamBurger
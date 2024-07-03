import React from 'react'
import { HeaderContent } from './HeaderContent'
import Navbar from './Navbar'
import Navlogo from './Navlogo'


const Header = () => {
 

  return (
    <div className='h-dvh navbody relative'>
      <marquee width="100%" behavior="scroll"  className=" bg-red-300">
        This is an example of a scroll marquee...
      </marquee>
      <Navlogo />
      <Navbar/>
     <HeaderContent/>
    </div>
  )
}

export default Header
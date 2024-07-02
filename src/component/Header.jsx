import React from 'react'
import { HeaderContent } from './HeaderContent'
import Navbar from './Navbar'


const Header = () => {
 

  return (
    <div className='h-dvh navbodycolor relative'>
      <marquee width="100%" behavior="scroll" bgcolor="bg-marquee">
        This is an example of a scroll marquee...
      </marquee>
      <Navbar/>
     <HeaderContent/>
    </div>
  )
}

export default Header
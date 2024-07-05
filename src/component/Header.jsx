import React from 'react'
import { HeaderContent } from './HeaderContent'
import Navbar from './Navbar'
import Navlogo from './Navlogo'
// import Breadcrumbs from './utiliti/breadcrumbs/Breadcrumbs'


const Header = () => {
  const isHome = location.pathname === '/';
  return (
    <div className=' navbody '>
      <marquee width="100%" behavior="scroll"  className=" bg-red-300">
        This is an example of a scroll marquee...
      </marquee>
      <Navlogo />
      <Navbar/>
     <HeaderContent isHome={isHome} />
     {/* <Breadcrumbs/> */}
    </div>
  )
}

export default Header
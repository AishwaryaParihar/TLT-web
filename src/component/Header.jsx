import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Navlogo from './Navlogo';
import { HeaderContent } from './HeaderContent';
import Breadcrumbs from './utiliti/breadcrumbs/Breadcrumbs';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const breadcrumbPages = []; 
  const isBreadcrumbPage = breadcrumbPages.includes(location.pathname);

  return (
    <div className='navbody'>
      <marquee width="100%" behavior="scroll" className="bg-red-300">
        This is an example of a scroll marquee...
      </marquee>
      <Navlogo />
      <Navbar />
      {isHome ? (
        <HeaderContent isHome={isHome} />
      ) : (
        isBreadcrumbPage ? (
          <Breadcrumbs >
            <HeaderContent isHome={isHome} />
          </Breadcrumbs>
        ) : (
          <HeaderContent isHome={isHome} />
        )
      )}
    </div>
  );
};

export default Header;

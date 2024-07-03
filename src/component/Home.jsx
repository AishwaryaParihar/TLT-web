import React from 'react'
import  Testimony  from './content/Testimony'
import  FeaturesCard  from './content/FeaturesCard'
import Aboutus from './content/Aboutus'
import Contactus from './content/Contactus'
// import ListItemHoverEffect from './content/ListItemHoverEffect'
import Fc from './content/Listsection'


export const Home = () => {
  return (
    <>
      <Testimony/>
      {/* <FeaturesCard/> */}
      {/* <Aboutus /> */}
      <Contactus />
      <Fc />
    </>
  )
}

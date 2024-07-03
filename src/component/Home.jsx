import React from 'react'
import  Testimony  from './content/Testimony'
import  FeaturesCard  from './content/FeaturesCard'
import Facility  from './content/Facility';
import Fee from "./content/Fee";


export const Home = () => {
  return (
    <div>
      <Testimony />
      <Fee />
      <FeaturesCard />
      <Facility/>
    </div>
  );
}


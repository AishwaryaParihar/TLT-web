
import React from 'react';
import styles from './registration.module.css';

const Registration = () => {
  return (
    <div className="">
      <div className='flex flex-col justify-center items-center text-center mt-10'>
        <h1 className='font-bold text-5xl'>TLT Judicial Academy</h1>
        <h3 className='text-black text-1xl font-bold sm:font-semibold sm:text-3xl mt-3'>2ND FLOOR, JYOTI CINEPLEX, MP NAGAR</h3>
        <h3 className='text-black text-1xl font-bold sm:font-semibold sm:text-3xl mt-3'>ZONE 1, BHOPAL, MOB: 9238176156</h3>
        <h1  className={styles.formBorder} >REGISTRATION FORM</h1>
        <h3  className='text-black text-1xl font-bold sm:font-semibold  sm:text-3xl mt-6'>2024-2025 Session</h3>
      </div>
    </div>
  );
}

export default Registration;

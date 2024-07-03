

// import React from 'react';

// const Facility = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-center text-black text-2xl md:text-4xl mb-4">Amenities</h1>
//       <div className="text-justify shadow p-8 m-20 text-lg">
//        <ul>
//        <ol> 1. Air Conditioned and ventilated classrooms. </ol><br></br>

//         2. Teaching through interactive methods via Smartboard.<br></br>
//         3. Supreme Court Live proceedings telecast on LED TVs.<br></br>
//         4. Speakers installed for better audio in Classroom.<br></br>
//         5. For Safety purposes, smoke detector, Fire alarms, and extinguisher installed.<br></br>
//         6. Complete library with systems for recovery classes.<br></br>
//         7. Biometric based entry and Exit system for enrolled students.<br></br>
//         8. 12 Cameras for surveillance and security purposes.<br></br>
//         9. Availability of Water Cooler for clean and cold water.
//         </ul>
//       </div>
      
//     </div>
//   );
// };

// export default Facility;

import React from 'react';

const Facility = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-black text-2xl md:text-4xl mb-4">Amenities</h1>
      <div className="text-justify shadow-lg p-4 m-4 text-lg md:m-20">
        <ol className="list-decimal list-inside space-y-2  ">
          <li >Air Conditioned and ventilated classrooms.</li>
          <li className='pt-4'>Teaching through interactive methods via Smartboard.</li>
          <li className='pt-4'>Supreme Court Live proceedings telecast on LED TVs.</li>
          <li className='pt-4'>Speakers installed for better audio in Classroom.</li>
          <li className='pt-4'>For Safety purposes, smoke detector, Fire alarms, and extinguisher installed.</li>
          <li className='pt-4'>Complete library with systems for recovery classes.</li>
          <li className='pt-4'>Biometric based entry and Exit system for enrolled students.</li>
          <li className='pt-4'>12 Cameras for surveillance and security purposes.</li>
          <li className='pt-4'>Availability of Water Cooler for clean and cold water.</li>
        </ol>
      </div>
    </div>
  );
};

export default Facility;

import React, { useState } from 'react';
import Registration from './Registration';


const EmpowermentBatch = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  
  const states = [
    { id: 1, name: 'Andaman and Nicobar Islands' },
    { id: 2, name: 'Andhra Pradesh' },
    { id: 3, name: 'Arunachal Pradesh' },
    { id: 4, name: 'Assam' },
    { id: 5, name: 'Bihar' },
    { id: 6, name: 'Chandigarh' },
    { id: 7, name: 'Chhattisgarh' },
    { id: 8, name: 'Dadra and Nagar Haveli' },
    { id: 9, name: 'Daman and Diu' },
    { id: 10, name: 'Delhi' },
    { id: 11, name: 'Goa' },
    { id: 12, name: 'Gujarat' },
    { id: 13, name: 'Haryana' },
    { id: 14, name: 'Himachal Pradesh' },
    { id: 15, name: 'Jammu and Kashmir' },
    { id: 16, name: 'Jharkhand' },
    { id: 17, name: 'Karnataka' },
    { id: 18, name: 'Kerala' },
    { id: 19, name: 'Lakshadweep' },
    { id: 20, name: 'Madhya Pradesh' },
    { id: 21, name: 'Maharashtra' },
    { id: 22, name: 'Manipur' },
    { id: 23, name: 'Meghalaya' },
    { id: 24, name: 'Mizoram' },
    { id: 25, name: 'Nagaland' },
    { id: 26, name: 'Odisha' },
    { id: 27, name: 'Puducherry' },
    { id: 28, name: 'Punjab' },
    { id: 29, name: 'Rajasthan' },
    { id: 30, name: 'Sikkim' },
    { id: 31, name: 'Tamil Nadu' },
    { id: 32, name: 'Telangana' },
    { id: 33, name: 'Tripura' },
    { id: 34, name: 'Uttar Pradesh' },
    { id: 35, name: 'Uttarakhand' },
    { id: 36, name: 'West Bengal' },
  ];

  const cities = {
    1: ['Port Blair'],
    2: ['Hyderabad', 'Vishakhapatnam'],
    3: ['Itanagar'],
    4: ['Guwahati', 'Dispur'],
    5: ['Patna', 'Gaya'],
    6: ['Chandigarh'],
    7: ['Raipur', 'Bilaspur'],
    8: ['Silvassa'],
    9: ['Daman'],
    10: ['New Delhi'],
    11: ['Panaji', 'Margao'],
    12: ['Ahmedabad', 'Surat'],
    13: ['Chandigarh', 'Faridabad'],
    14: ['Shimla', 'Manali'],
    15: ['Srinagar', 'Jammu'],
    16: ['Ranchi', 'Jamshedpur'],
    17: ['Bengaluru', 'Mysuru'],
    18: ['Thiruvananthapuram', 'Kochi'],
    19: ['Kavaratti'],
    20: ['Bhopal', 'Indore'],
    21: ['Mumbai', 'Pune'],
    22: ['Imphal'],
    23: ['Shillong'],
    24: ['Aizawl'],
    25: ['Kohima'],
    26: ['Bhubaneswar', 'Cuttack'],
    27: ['Puducherry'],
    28: ['Ludhiana', 'Amritsar'],
    29: ['Jaipur', 'Udaipur'],
    30: ['Gangtok'],
    31: ['Chennai', 'Coimbatore'],
    32: ['Hyderabad', 'Warangal'],
    33: ['Agartala'],
    34: ['Lucknow', 'Kanpur'],
    35: ['Dehradun', 'Nainital'],
    36: ['Kolkata', 'Darjeeling'],
  };

  return (
    
    <div className="px-5 md:px-20 py-0">
      <div>
        <Registration />
      </div>

      <div className="text-justify mx-auto mx-8  sm:px-20 ">
        <div className='mt-10'>
          <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-20">
            EMPOWERMENT BATCH 01
          </h2>
        </div>

        <form className="mt-10">
          <div className="space-y-6 sm:px-10">
            <div className="sm:flex items-center">
              <label htmlFor="choose-picture" className="block text-left font-bold text-lg  sm:w-1/5">
                Choose picture:
              </label>
              <input type="file" name="choose-picture" id="choose-picture" className="border rounded w-full p-2" />
            </div>

            <div className="sm:flex items-center">
              <label htmlFor="name" className="block text-left font-bold text-lg  sm:w-1/5">
                Name:
              </label>
              <input type="text" name="name" id="name" className="border rounded w-full p-2" />
            </div>

            <div className="sm:flex items-center">
              <label htmlFor="place-of-birth" className="block text-left font-bold text-lg   sm:w-1/5">
                Place Of Birth:
              </label>
              <input type="text" name="place-of-birth" id="place-of-birth"  className="border rounded w-full p-2" />
            </div>

            <div className="sm:flex items-center">
              <label htmlFor="date-of-birth" className="block text-left font-bold text-lg  sm:w-1/5">
                Date Of Birth:
              </label>
              <input type="date" name="date-of-birth" id="date-of-birth" className="border rounded w-full p-2" />
            </div>

            <div className="sm:flex items-center">
              <label htmlFor="full-address" className="block text-left font-bold text-lg   sm:w-1/5">
                Full Address:
              </label>
              <input type="text" name="full-address" id="full-address"  className="border rounded w-full p-2" />
            </div>

            <div className="sm:flex items-center">
              <label htmlFor="state" className="block text-left font-bold text-lg   sm:w-1/5">
                State:
              </label>
              <select
                className="form-control border rounded w-full p-2"
                name="f_state"
                id="fstate"
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option selected hidden disabled>
                  Select State
                </option>
                {states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:flex items-center">
              <label htmlFor="city" className="block text-left font-bold text-lg w-1/5   sm:w-1/5">
                City:
              </label>
              <select
                className="form-control border rounded w-full p-2"
                name="f_city"
                id="fcity"
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState}
              >
                <option selected hidden disabled>
                  Select City
                </option>
                {selectedState && cities[selectedState].map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:flex items-center">
              <label htmlFor="pin-code" className="block text-left font-bold text-lg   sm:w-1/5">
                Pin Code:
              </label>
              <input type="number" name="pin-code" id="pin-code" className="border rounded w-full p-2" />
            </div>

            <div className="sm:flex items-center">
              <label htmlFor="qualification" className="block text-left font-bold text-lg   sm:w-1/5">
                Qualification:
              </label>
              <input type="text" name="qualification" id="qualification"  className="border rounded w-full p-2" />
            </div>

            <div className="sm:flex items-center">
              <label htmlFor="college-university" className="block text-left font-bold text-lg   sm:w-1/5">
                College/University:
              </label>
              <input type="text" name="college-university" id="college-university"  className="border rounded w-full p-2" />
            </div>
       
            <div className='sm:flex items-center'>
         <label className="block text-left font-bold text-lg   sm:w-1/6">Pursuing LL.B:</label>
          <div className="flex space-x-4">
            <label>
              <input type="radio" name="pursuingLLB" value="yes" className="mr-2"/> Yes
            </label>
            <label>
              <input type="radio" name="pursuingLLB" value="no" className="mr-2"/> No
           </label>
           </div>
        </div>

         <div className='sm:flex items-center'>
          <label htmlFor="year-of-passing" className="block text-left font-bold text-lg   sm:w-1/5">Year Of Passing:</label>
          <input type="number" name="year-of-passing" id="year-of-passing"  className="border rounded w-full p-2"/>
        </div>

        <div className='sm:flex items-center'>
          <label htmlFor="email" className="block text-left font-bold text-lg    sm:w-1/5">Email:</label>
          <input type="email" name="email" id="email"  className="border rounded w-full p-2"/>
          </div>
          {/* personal details */} 
       
           
          <div>
          <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4">Personal Information</h2>
        </div>
        <div className='sm:flex items-center'>
          <label htmlFor="father-name" className="block text-left font-bold text-lg   sm:w-1/5">Father's Name:</label>
          <input type="text" name="father-name" id="father-name" className="border rounded w-full p-2"/>
        </div>

        <div className='sm:flex items-center'>
          <label htmlFor="mother-name" className="block text-left font-bold text-lg   sm:w-1/5">Mother's Name:</label>
          <input type="text" name="mother-name" id="mother-name" className="border rounded w-full p-2"/>
        </div>

        <div className='sm:flex items-center'>
          <label htmlFor="permanent-address" className="block text-left font-bold text-lg   sm:w-1/5">Permanent Address:</label>
          <input type="text" name="permanent-address" id="permanent-address" className="border rounded w-full p-2"/>
        </div>

        <div className='sm:flex items-center'>
          <label htmlFor="state" className="block text-left font-bold text-lg    sm:w-1/5">State:</label>
         
          <select
          className="form-control border rounded w-full p-2"
          name="f_state"
          id="fstate"
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option selected hidden disabled>
            Select State
          </option>
          {states.map((state) => (
            <option key={state.id} value={state.id}>
              {state.name} 
            </option>
          ))}
        </select>
     
        </div>
        <div className='sm:flex items-center'>
          <label htmlFor="city" className="block text-left font-bold text-lg    sm:w-1/5">City:</label>

          <select
          className="form-control border rounded w-full p-2"
          name="f_city"
          id="fcity"
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
        >
          <option selected hidden disabled>
            Select City
          </option>
          {selectedState && cities[selectedState].map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
         
        </div>
        <div className='sm:flex items-center'>
          <label htmlFor="aadhar-card" className="block text-left font-bold text-lg sm:w-1/5">Upload Aadhar (Front and Back):</label>
          <input type="file" name="aadhar-card" id="aadhar-card" className="border rounded w-full p-2"/>
        </div>
   
        <div>
           <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-10">Fees Paid ( First Installment )</h2>
         </div>
        <div className='flex justify-between items-center'>

       <label className="flex text-left font-bold text-lg sm:w-1/6"> Online / UPI:
         <input type="radio" name="mains" value="yes" className="mx-2 mt-1"/> </label>
      </div>
      <div className='sm:flex items-center'>
      <label htmlFor=" amount-paid" className="block text-left font-bold text-lg sm:w-1/5">Amount Paid :</label>
      <input type="number" name=" amount-paid" id=" amount-paid "  className="border rounded w-full p-2"/>
      </div>
  
      <div className='sm:flex items-center'>
      <label className="block text-left font-bold text-lg sm:w-1/6">Old Student of Shubham Sir :</label>
       <div className="flex space-x-4">
         <label>
           <input type="radio" name="pursuingLLB" value="yes" className="mr-2"/> Yes
         </label>
         <label>
           <input type="radio" name="pursuingLLB" value="no" className="mr-2"/> No
        </label>
        </div>
      </div>
 
  <div className='sm:flex items-center'>
          <label htmlFor="email" className="block text-left font-bold text-lg    sm:w-1/5">Institution :</label>
          <input type="text" name="Institution " id="Institution "  className="border rounded w-full p-2"/>
          </div>
          
 <div className="flex justify-center mt-6">
 <button type='submit' className='bg-red-500 border text-white font-bold py-2 px-4 rounded mb-10'>
   Submit
 </button>
</div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default EmpowermentBatch;

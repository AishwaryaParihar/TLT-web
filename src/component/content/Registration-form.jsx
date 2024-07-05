// import React from 'react'

// const RegistrationForm = () => {
//   return (
//     <div className='raunded 2px-black text-center '>
//       <div className=''>
//         <div>
//          <h2 className='text-white bg-red-500 text-center text-3xl py-3 px-20'>SUPER 30 FAST TRACK BATCH</h2>
//         </div>
//       </div>
//       <form>
//       <div>
//        <div>
//        <label for="choose-picture">Choose picture:</label>
//        <input type="file" name="choose-picture" id="choose-picture" 
//         className=''></input>
//        </div>
//        <div>
//         <label for="choose-picture">Name:</label>
//         <input type="text" name="name" id="name" placeholder='enter your name'
//          className=''></input>
//         </div>
//         <div>
//          <label for="place-of-birth">Place Of Birth:</label>
//          <input type="text" name="place-of-birth" id="place-of-birth" placeholder='enter your birth place'
//           className=''></input>
//           </div>
//           <div>
//          <label for="date-of-birth">Date Of Birth:</label>
//          <input type="date" name="date-of-birth" id="date-of-birth" placeholder='enter your DOB'
//           className=''></input>
//           </div>
//           <div>
//           <label for="full-address">Full Address:</label>
//           <input type="text" name="full-address" id="full-address" placeholder='enter your address'
//            className=''></input>
//            </div>
//            <div>
//           <label for="state">State:</label>
//           <select>
//              <option>1</option>
//              <option>2</option>
//              <option>3</option>
//              <option>4</option>
//              <option>5</option>
//           </select>
//            </div>
//            <div>
//            <label for="pin-code">Pin Code:</label>
//            <input type="number" name="pin-code" id="pin-code" placeholder='enter your pin code'
//             className=''></input>
//            </div>
//           <div>
//            <label for="qualification">Qualification:</label>
//            <input type="text" name="qualification" id="qualification" placeholder='enter your qualification '
//             className=''></input>
//            </div>
//            <div>
//            <label for="college-university">College/University:</label>
//            <input type="text" name="college-university" id="college-university" placeholder='enter your qualification '
//             className=''></input>
//           </div>
//          <div>
//          <label className="font-semibold mb-2">Pursuing LL.B:</label>
//                  <div className="mb-4">
//                    <label>
//                       <input type="radio" name="pursuingLLB" value="yes" className="mr-2" />
//                       Yes
//                     </label>
//                    <label className="ml-4">
//                       <input type="radio" name="pursuingLLB" value="no" className="mr-2" />
//                      No
//                   </label>
//                  </div>
//               </div>
//               <div>
//            <label for="year-of-passing">Year Of Passing:</label>
//            <input type="number" name="year-of-passing" id="year-of-passing" placeholder='enter your qualification '
//             className=''></input>
//           </div>
//           <div>
//           <label for="emai">Email:</label>
//           <input type="number" name="email" id="email" placeholder='enter your email id'
//            className=''></input>
//          </div>
//            </div>
      
//       </form>
      
//     </div>
//   )
// }
// export default RegistrationForm;

import React from 'react';

const RegistrationForm = () => {
  return (
    <div className=" text-justify mx-auto mx-6 sm:mx-20 sm:px-20 mt-10">
      <div>
        <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4">SUPER 30 FAST TRACK BATCH</h2>
      </div>
      <form className='mt-10'>
        <div className="space-y-6 px-10 ">
          <div className='flex'>
            <label htmlFor="choose-picture" className="block text-left text-black">Choose picture:</label>
            <input type="file" name="choose-picture" id="choose-picture" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="name" className="block text-left">Name:</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="place-of-birth" className="block text-left">Place Of Birth:</label>
            <input type="text" name="place-of-birth" id="place-of-birth" placeholder="Enter your birth place" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="date-of-birth" className="block text-left">Date Of Birth:</label>
            <input type="date" name="date-of-birth" id="date-of-birth" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="full-address" className="block text-left">Full Address:</label>
            <input type="text" name="full-address" id="full-address" placeholder="Enter your address" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="state" className="block text-left">State:</label>
            <select id="state" className="border rounded w-full p-2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className='flex'>
            <label htmlFor="pin-code" className="block text-left">Pin Code:</label>
            <input type="number" name="pin-code" id="pin-code" placeholder="Enter your pin code" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="qualification" className="block text-left">Qualification:</label>
            <input type="text" name="qualification" id="qualification" placeholder="Enter your qualification" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="college-university" className="block text-left">College/University:</label>
            <input type="text" name="college-university" id="college-university" placeholder="Enter your college/university" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label className="block text-left">Pursuing LL.B:</label>
            <div className="flex space-x-4">
              <label>
                <input type="radio" name="pursuingLLB" value="yes" className="mr-2"/> Yes
              </label>
              <label>
                <input type="radio" name="pursuingLLB" value="no" className="mr-2"/> No
              </label>
            </div>
          </div>
          <div className='flex'>
            <label htmlFor="year-of-passing" className="block text-left">Year Of Passing:</label>
            <input type="number" name="year-of-passing" id="year-of-passing" placeholder="Enter your year of passing" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="email" className="block text-left">Email:</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" className="border rounded w-full p-2"/>
          </div>

          <div>
          <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4">Personal Information </h2>
        </div>
        <div className='flex'>
        <label htmlFor="father-name" className="block text-left">Father's Name:</label>
        <input type="text" name="father-name" id="father-name" className="border rounded w-full p-2"/>
      </div>
      <div className='flex'>
        <label htmlFor="mother-name" className="block text-left">Mother's Name:</label>
        <input type="text" name="father-name" id="father-name" className="border rounded w-full p-2"/>
      </div>
      <div className='flex'>
        <label htmlFor="permanent-address" className="block text-left">Permanents Address:</label>
        <input type="text" name="permanent-address" id="permanent-address" className="border rounded w-full p-2"/>
      </div>
      <div className='flex'>
      <label htmlFor="state" className="block text-left">State:</label>
      <select id="state" className="border rounded w-full p-2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div className='flex'>
    <label htmlFor="city" className="block text-left">City:</label>
    <select id="city" className="border rounded w-full p-2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
      <div className='flex'>
      <label htmlFor="aadhar-card" className="block text-left">Upload Aadhar(Front and Back Site):</label>
      <input type="file" name="aadhar-card" id="aadhar-card" className="border rounded w-full p-2"/>
    </div>
    <div>
    <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4">Personal Information </h2>
    </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;

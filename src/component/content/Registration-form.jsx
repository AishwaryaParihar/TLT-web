import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="text-justify mx-auto mx-6 sm:mx-20 sm:px-20 mt-10">
      <div>
        <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-10">SUPER 30 FAST TRACK BATCH</h2>
      </div>
      <form className='mt-10'>
        <div className="space-y-6 sm:px-10">
          <div className='flex items-center'>
            <label htmlFor="choose-picture" className="block text-left font-bold text-lg w-1/5 ">Choose picture:</label>
            <input type="file" name="choose-picture" id="choose-picture" className="border rounded w-full p-2"/>
          </div>
          <div className='flex items-center'>
            <label htmlFor="name" className="block text-left font-bold text-lg w-1/5">Name:</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" className="border rounded w-full p-2"/>
          </div>
          <div className='flex items-center'>
            <label htmlFor="place-of-birth" className="block text-left font-bold text-lg w-1/5">Place Of Birth:</label>
            <input type="text" name="place-of-birth" id="place-of-birth" placeholder="Enter your birth place" className="border rounded w-full p-2"/>
          </div>
          <div className='flex items-center'>
            <label htmlFor="date-of-birth" className="block text-left font-bold text-lg w-1/5">Date Of Birth:</label>
            <input type="date" name="date-of-birth" id="date-of-birth" className="border rounded w-full p-2"/>
          </div>
          <div className='flex items-center'>
            <label htmlFor="full-address" className="block text-left font-bold text-lg w-1/5">Full Address:</label>
            <input type="text" name="full-address" id="full-address" placeholder="Enter your address" className="border rounded w-full p-2"/>
          </div>
          <div className='flex items-center'>
            <label htmlFor="state" className="block text-left font-bold text-lg w-1/5">State:</label>
            <select id="state" className="border rounded w-full p-2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className='flex items-center'>
            <label htmlFor="pin-code" className="block text-left font-bold text-lg w-1/5">Pin Code:</label>
            <input type="number" name="pin-code" id="pin-code" placeholder="Enter your pin code" className="border rounded w-full p-2"/>
          </div>
          <div className='flex items-center'>
            <label htmlFor="qualification" className="block text-left font-bold text-lg w-1/5">Qualification:</label>
            <input type="text" name="qualification" id="qualification" placeholder="Enter your qualification" className="border rounded w-full p-2"/>
          </div>
          <div className='flex items-center'>
            <label htmlFor="college-university" className="block text-left font-bold text-lg w-1/5">College/University:</label>
            <input type="text" name="college-university" id="college-university" placeholder="Enter your college/university" className="border rounded w-full p-2"/>
          </div>
          <div className='flex items-center'>
            <label className="block text-left font-bold text-lg w-1/6">Pursuing LL.B:</label>
            <div className="flex space-x-4">
              <label>
                <input type="radio" name="pursuingLLB" value="yes" className="mr-2"/> Yes
              </label>
              <label>
                <input type="radio" name="pursuingLLB" value="no" className="mr-2"/> No
              </label>
            </div>
          </div>
          <div className='flex items-center'>
            <label htmlFor="year-of-passing" className="block text-left font-bold text-lg w-1/5">Year Of Passing:</label>
            <input type="number" name="year-of-passing" id="year-of-passing" placeholder="Enter your year of passing" className="border rounded w-full p-2"/>
          </div>
          <div className='flex items-center'>
            <label htmlFor="email" className="block text-left font-bold text-lg w-1/5">Email:</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" className="border rounded w-full p-2"/>
          </div>

          <div>
            <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4">Personal Information</h2>
          </div>
          <div className='flex items-center'>
            <label htmlFor="father-name" className="block text-left font-bold text-lg w-1/5">Father's Name:</label>
            <input type="text" name="father-name" id="father-name" className="border rounded w-full p-2"/>
          </div>
          <div className='flex items-center'>
            <label htmlFor="mother-name" className="block text-left font-bold text-lg w-1/5">Mother's Name:</label>
            <input type="text" name="mother-name" id="mother-name" className="border rounded w-full p-2"/>
          </div>
          <div className='flex items-center'>
            <label htmlFor="permanent-address" className="block text-left font-bold text-lg w-1/5">Permanent Address:</label>
            <input type="text" name="permanent-address" id="permanent-address" className="border rounded w-full p-2"/>
          </div>
          <div className='flex items-center'>
            <label htmlFor="state" className="block text-left font-bold text-lg w-1/5">State:</label>
            <select id="state" className="border rounded w-full p-2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className='flex items-center'>
            <label htmlFor="city" className="block text-left font-bold text-lg w-1/5">City:</label>
            <select id="city" className="border rounded w-full p-2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className='flex items-center'>
            <label htmlFor="aadhar-card" className="block text-left font-bold text-lg w-1/5">Upload Aadhar<br></br> (Front and Back):</label>
            <input type="file" name="aadhar-card" id="aadhar-card" className="border rounded w-full p-2"/>
          </div>
     

          <div>
            <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-10">SUPER 30 Details Of Last Qualified Exam</h2>
          </div>
          <div className='flex justify-around items-center space-x-4'>
          <div className='flex justify-between items-center'>
            <label className="flex  text-left font-bold text-lg w-1/6 px-5">Prelims:  
            <input type="radio" name="prelims" value="yes" className="mx-2 mt-1"/> 
            </label>
            </div>
            <div className='flex justify-between items-center'>

            <label className="flex text-left font-bold text-lg w-1/6">Mains:
            <input type="radio" name="mains" value="yes" className="mx-2 mt-1"/> </label>
          </div>
          </div>
          <div className='flex items-center space-x-4'>
          
            <label htmlFor="state" className="block text-left font-bold text-lg w-1/6">State:</label>
            <input type="text" name="state" id="state" className="border rounded p-2 w-full"/>
          </div>
          <div className='flex items-center space-x-4'>
            <label htmlFor="score" className="block text-left font-bold text-lg w-1/6">Score:</label>
            <input type="number" name="score" id="score" className="border rounded p-2 w-full"/>
          </div>
          <div className='flex items-center space-x-4'>
            <label htmlFor="year" className="block text-left font-bold text-lg w-1/6">Year:</label>
            <input type="number" name="year" id="year" className="border rounded p-2 w-full"/>
          </div>
          
          <div>
            <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-10">Fees Paid ( First Installment )</h2>
          </div>
          <div className='flex justify-between items-center'>

          <label className="flex text-left font-bold text-lg w-1/6"> Online / UPI:
          <input type="radio" name="mains" value="yes" className="mx-2 mt-1"/> </label>
        </div>
        <div className='flex items-center space-x-4'>
        <label htmlFor="score" className="block text-left font-bold text-lg w-1/6">Amount Paid :</label>
        <input type="number" name="score" id="score" className="border rounded p-2 w-full"/>
      </div>
      <div className='flex items-center'>
      <label className="block text-left font-bold text-lg w-1/6">Old Student of<br></br> Shubham Sir :</label>
      <div className="flex space-x-4">
        <label>
          <input type="radio" name="pursuingLLB" value="yes" className="mr-2"/> Yes
        </label>
        <label>
          <input type="radio" name="pursuingLLB" value="no" className="mr-2"/> No
        </label>
      </div>
    </div>
    <div className='flex items-center space-x-4'>
          
    <label htmlFor="state" className="block text-left font-bold text-lg w-1/6">Institution :</label>
    <input type="text" name="state" id="state" className="border rounded p-2 w-full"/>
  </div>

  <div className="flex justify-center mt-6">
            <button type='submit' className='bg-red-500 border border-black text-white font-bold py-2 px-4 rounded mb-10'>
              Submit
            </button>
          </div>
 
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;

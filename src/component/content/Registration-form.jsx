import React from 'react';

const RegistrationForm = () => {
  return (
    <div className=" text-justify mx-auto mx-6 sm:mx-20 sm:px-20 mt-10">
      <div>
        <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 px-6 sm:px-10">SUPER 30 FAST TRACK BATCH</h2>
      </div>
      <form className='mt-10'>
        <div className="space-y-6 px-6 sm:px-10 ">
          <div className='flex'>
            <label htmlFor="choose-picture" className="block text-left font-bold text-lg">Choose picture:</label>
            <input type="file" name="choose-picture" id="choose-picture" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="name" className="block text-left  font-bold text-lg">Name:</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="place-of-birth" className="block text-left  font-bold text-lg">Place Of Birth:</label>
            <input type="text" name="place-of-birth" id="place-of-birth" placeholder="Enter your birth place" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="date-of-birth" className="block text-left  font-bold text-lg">Date Of Birth:</label>
            <input type="date" name="date-of-birth" id="date-of-birth" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="full-address" className="block text-left  font-bold text-lg">Full Address:</label>
            <input type="text" name="full-address" id="full-address" placeholder="Enter your address" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="state" className="block text-left  font-bold text-lg">State:</label>
            <select id="state" className="border rounded w-full p-2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className='flex'>
            <label htmlFor="pin-code" className="block text-left  font-bold text-lg">Pin Code:</label>
            <input type="number" name="pin-code" id="pin-code" placeholder="Enter your pin code" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="qualification" className="block text-left  font-bold text-lg">Qualification:</label>
            <input type="text" name="qualification" id="qualification" placeholder="Enter your qualification" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="college-university" className="block text-left  font-bold text-lg">College/University:</label>
            <input type="text" name="college-university" id="college-university" placeholder="Enter your college/university" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label className="block text-left  font-bold text-lg">Pursuing LL.B:</label>
            <div className="flex space-x-4">
              <label>
                <input type="radio" name="pursuingLLB" value="yes" className="mr-2  font-bold text-lg"/> Yes
              </label>
              <label>
                <input type="radio" name="pursuingLLB" value="no" className="mr-2  font-bold text-lg"/> No
              </label>
            </div>
          </div>
          <div className='flex'>
            <label htmlFor="year-of-passing" className="block text-left  font-bold text-lg">Year Of Passing:</label>
            <input type="number" name="year-of-passing" id="year-of-passing" placeholder="Enter your year of passing" className="border rounded w-full p-2"/>
          </div>
          <div className='flex'>
            <label htmlFor="email" className="block text-left  font-bold text-lg">Email:</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" className="border rounded w-full p-2"/>
          </div>

          <div>
          <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4  ">Personal Information </h2>
        </div>
        <div className='flex'>
        <label htmlFor="father-name" className="block text-left  font-bold text-lg">Father's Name:</label>
        <input type="text" name="father-name" id="father-name" className="border rounded w-full p-2"/>
      </div>
      <div className='flex'>
        <label htmlFor="mother-name" className="block text-left  font-bold text-lg">Mother's Name:</label>
        <input type="text" name="father-name" id="father-name" className="border rounded w-full p-2"/>
      </div>
      <div className='flex'>
        <label htmlFor="permanent-address" className="block text-left  font-bold text-lg">Permanents Address:</label>
        <input type="text" name="permanent-address" id="permanent-address" className="border rounded w-full p-2"/>
      </div>
      <div className='flex'>
      <label htmlFor="state" className="block text-left  font-bold text-lg">State:</label>
      <select id="state" className="border rounded w-full p-2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div className='flex'>
    <label htmlFor="city" className="block text-left  font-bold text-lg">City:</label>
    <select id="city" className="border rounded w-full p-2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
      <div className='flex'>
      <label htmlFor="aadhar-card" className="block text-left  font-bold text-lg">Upload Aadhar(Front and Back Site):</label>
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

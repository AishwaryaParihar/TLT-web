import React from 'react';

const Registration = () => {
  return (
    <div className="p-4 sm:p-8 bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-center font-bold text-2xl mb-4">Registration Form</h2>
      <h3 className="text-center font-semibold text-xl mb-2">TLT Judicial Academy</h3>
      <address className="text-center mb-4">
        <p>2nd Floor, Jyoti Cineplex, MP Nagar</p>
        <p>Zone 1, Bhopal, Mob: 9238176156</p>
      </address>
      <h4 className="text-center font-semibold text-lg mb-4">2024-2025</h4>
      <div className="text-center mb-4">
        <h4 className="font-semibold text-lg">Super 30 Fast Track Batch</h4>
      </div>
      <form className="flex flex-col items-center">
        <label className="font-semibold mb-2">Choose Picture:</label>
        <input type="file" className="mb-4" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;

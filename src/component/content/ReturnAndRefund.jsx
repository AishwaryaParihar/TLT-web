// import React from 'react'

//  const ReturnAndRefund = () => {
//   return (
//     <div className='sm:m-20 sm:p-8 border-collapse '>
   
//      <h2 className='text-center font-bold text-4xl'>Refund Policy</h2>
//      <p className='pt-10 text-lg '>We at The Law Tales always aim at identifying the issue and help you fix it. However, if the issue still persist, email us your concerns & course details from your registered email ID to support@thelawtales.in. Our team will connect with you.</p>

//      <h1 className='font-bold text-2xl sm:pt-6'>Our refund policy is:</h1>
//      <ul className='text-lg '>
//        <li className='pt-7'>Refunds are only allowed within 3 days of enrollment. A 100% refund (after deducting GST and payment gateway charges) will be paid to the candidate. Refund requests will not be processed after 3 days of enrollment. No refund requests shall be made with respect to the Tests & Course modules.</li><br></br>

//        <li>When you enroll in any course on The Law Tales, you agree to our Privacy Policy, Terms of Use, and Refund Policy.</li><br></br>

//        <li>The Law Tales reserves the right to prepone/postpone/cancel a Batch/class, or an event, for any reason whatsoever, in or beyond its control. In that case, refund is paid. However, logistics or any personal expense incurred by learners/participants is not refunded.</li><br></br>

//        <li><span className='text-red-700'>Note:</span> All refunds will be processed within 30 working days after the refund request is approved.</li>
//      </ul>

//      <h2 className='text-center font-bold text-4xl sm:pt-10'>Return Policy</h2>
//      <h1  className='font-bold text-2xl sm:pt-6'>No refund after Delivery of the product:</h1>
//      <p className='sm:pt-5 text-lg'>The delivery of our product will be made within 2 days of the payment. The delivery will be done through online mode via Whatsapp/Telegram in PDF format hence no refund will be made once delivery.</p>
//      </div>
   
//   )
// }
// export default ReturnAndRefund;

import React from 'react';

const ReturnAndRefund = () => {
  return (
    <div className="sm:m-20 sm:p-8 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-center font-bold text-4xl text-primary mb-8">Refund Policy</h2>
      <p className="pt-6 text-lg leading-relaxed">
        We at The Law Tales always aim at identifying the issue and helping you fix it. However, if the issue still persists, email us your concerns & course details from your registered email ID to <a href="mailto:support@thelawtales.in" className="text-blue-500 underline">support@thelawtales.in</a>. Our team will connect with you.
      </p>
      
      <h1 className="font-bold text-2xl sm:pt-8 pt-6">Our refund policy is:</h1>
      <ul className="text-lg list-disc list-inside mt-4 space-y-4">
        <li>
          Refunds are only allowed within 3 days of enrollment. A 100% refund (after deducting GST and payment gateway charges) will be paid to the candidate. Refund requests will not be processed after 3 days of enrollment. No refund requests shall be made with respect to the Tests & Course modules.
        </li>
        <li>
          When you enroll in any course on The Law Tales, you agree to our Privacy Policy, Terms of Use, and Refund Policy.
        </li>
        <li>
          The Law Tales reserves the right to prepone/postpone/cancel a Batch/class, or an event, for any reason whatsoever, in or beyond its control. In that case, refund is paid. However, logistics or any personal expense incurred by learners/participants is not refunded.
        </li>
        <li>
          <span className="text-red-700">Note:</span> All refunds will be processed within 30 working days after the refund request is approved.
        </li>
      </ul>
      
      <h2 className="text-center font-bold text-4xl text-primary sm:pt-10 pt-8">Return Policy</h2>
      <h1 className="font-bold text-2xl sm:pt-6 pt-6">No refund after Delivery of the product:</h1>
      <p className="sm:pt-5 pt-4 text-lg leading-relaxed">
        The delivery of our product will be made within 2 days of the payment. The delivery will be done through online mode via Whatsapp/Telegram in PDF format hence no refund will be made once delivery.
      </p>
    </div>
  );
};

export default ReturnAndRefund;

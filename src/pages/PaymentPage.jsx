import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    // As requested earlier, payment goes to address page next
    navigate('/shipping');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-md md:max-w-xl">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-[#f0c14b] px-6 py-4 border-b border-yellow-600 flex justify-end items-center shadow-sm">
            <button onClick={() => navigate(-1)} className="text-sm font-semibold text-gray-800 hover:text-black hover:underline tracking-wide">CANCEL</button>
          </div>
          
          <form onSubmit={submitHandler} className="p-4 sm:p-5 space-y-6">
            
            {/* UPI Section */}
            <div>
              <h3 className="font-bold text-gray-800 text-xs mb-3 uppercase tracking-wider flex items-center">
                <span className="mr-2 text-indigo-700 italic text-sm">UPI</span> 
              </h3>
              <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100 bg-white">
                {/* Amazon Pay UPI */}
                <label className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex items-center h-5 mt-1">
                    <input name="paymentMethod" type="radio" value="Amazon Pay UPI" onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500" />
                  </div>
                  <div className="ml-3 flex-grow">
                    <span className="block text-gray-800 font-medium">Amazon Pay UPI</span>
                    <span className="block text-blue-600 text-sm font-medium mt-0.5">Setup Now</span>
                    <span className="block text-gray-500 text-xs mt-0.5">Get flat ₹25 back</span>
                  </div>
                </label>
                
                {/* PhonePe */}
                <label className="flex items-center p-4 cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex items-center h-5">
                    <input name="paymentMethod" type="radio" value="PhonePe" onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500" />
                  </div>
                  <div className="ml-3 flex-grow">
                    <span className="block text-gray-800 font-medium">PhonePe</span>
                  </div>
                </label>

                {/* Google Pay */}
                <label className="flex items-center p-4 cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex items-center h-5">
                    <input name="paymentMethod" type="radio" value="Google Pay" onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500" />
                  </div>
                  <div className="ml-3 flex-grow">
                    <span className="block text-gray-800 font-medium">Google Pay</span>
                  </div>
                </label>

                {/* Pay by any UPI App */}
                <label className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex items-center h-5 mt-1">
                    <input name="paymentMethod" type="radio" value="Any UPI App" onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500" />
                  </div>
                  <div className="ml-3 flex-grow">
                    <span className="block text-gray-800 font-medium">Pay by any UPI App</span>
                    <span className="block text-gray-500 text-xs mt-1">Google Pay, PhonePe, Paytm and more</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Credit & Debit Cards Section */}
            <div>
              <h3 className="font-bold text-gray-800 text-xs mb-3 uppercase tracking-wider">CREDIT & DEBIT CARDS</h3>
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 p-4 cursor-pointer hover:bg-gray-100 flex items-center transition">
                <span className="text-blue-700 text-2xl font-light mr-3 border border-blue-700 rounded-full w-6 h-6 flex items-center justify-center leading-none pb-1">+</span>
                <span className="text-blue-800 font-medium">Add a new credit or debit card</span>
              </div>
            </div>

            {/* More Ways To Pay Section */}
            <div>
              <h3 className="font-bold text-gray-800 text-xs mb-3 uppercase tracking-wider">MORE WAYS TO PAY</h3>
              <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100 bg-white">
                {/* Amazon Pay Balance */}
                <label className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex items-center h-5 mt-1">
                    <input name="paymentMethod" type="radio" value="Amazon Pay Balance" onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500" />
                  </div>
                  <div className="ml-3 flex-grow">
                    <span className="block text-gray-500 font-medium">Amazon Pay Balance: ₹0.00</span>
                    <span className="block text-blue-600 text-sm font-medium mt-0.5">Details</span>
                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between mt-3 gap-2">
                      <span className="block text-gray-500 text-sm">Add ₹1897.00 to proceed</span>
                      <button type="button" className="border border-gray-300 px-4 py-1.5 text-sm rounded-full bg-white hover:bg-gray-50 text-gray-800 font-medium whitespace-nowrap shadow-sm">Add Now &gt;</button>
                    </div>
                  </div>
                </label>

                {/* Amazon Pay Later */}
                <label className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex items-center h-5 mt-1">
                    <input name="paymentMethod" type="radio" value="Amazon Pay Later" onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500" />
                  </div>
                  <div className="ml-3 flex-grow">
                    <span className="block text-gray-800 font-medium">Amazon Pay Later</span>
                    <span className="block text-gray-500 text-xs mt-1 pr-4 leading-relaxed">Get instant credit upto Rs 60,000. Check eligibility & apply now</span>
                  </div>
                </label>

                {/* EMI */}
                <label className="flex items-center p-4 cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex items-center h-5">
                    <input name="paymentMethod" type="radio" value="EMI" onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500" />
                  </div>
                  <div className="ml-3 flex-grow">
                    <span className="block text-gray-800 font-medium">EMI</span>
                  </div>
                </label>

                {/* Net Banking */}
                <label className="flex items-center p-4 cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex items-center h-5">
                    <input name="paymentMethod" type="radio" value="Net Banking" onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500" />
                  </div>
                  <div className="ml-3 flex-grow">
                    <span className="block text-gray-800 font-medium">Net Banking</span>
                  </div>
                </label>

                {/* Cash on Delivery */}
                <label className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex items-center h-5 mt-1">
                    <input name="paymentMethod" type="radio" value="Cash on Delivery" onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500" />
                  </div>
                  <div className="ml-3 flex-grow">
                    <span className="block text-gray-800 font-medium">Cash on Delivery/Pay on Delivery</span>
                    <span className="block text-gray-500 text-xs mt-1">Cash, UPI and Cards accepted. <span className="text-blue-600 hover:underline">Know more.</span></span>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-gray-100 mt-8 pb-4">
              <button type="submit" className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 font-bold py-3.5 rounded-xl shadow-sm border border-[#fcd200] transition duration-200 text-base">
                Continue to Address
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

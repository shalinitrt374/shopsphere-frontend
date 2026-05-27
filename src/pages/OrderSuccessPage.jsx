import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const OrderSuccessPage = () => {
  // Generate a random order ID like AMZ-12345678
  const orderId = 'AMZ-' + Math.floor(10000000 + Math.random() * 90000000);
  
  // Calculate a delivery date (3 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const deliveryOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = deliveryDate.toLocaleDateString('en-US', deliveryOptions);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center p-8 border-t-8 border-green-500">
          
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Order placed, thank you!</h1>
          <p className="text-gray-600 mb-8 text-lg">Confirmation will be sent to your email.</p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200 text-left">
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Order Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 font-semibold mb-1">Order Number</p>
                <p className="text-gray-900 font-bold">{orderId}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 font-semibold mb-1">Estimated Delivery</p>
                <p className="text-green-600 font-bold">{formattedDate}</p>
                <p className="text-xs text-gray-500 mt-1">Between 9:00 AM and 8:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/track-order" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-md transition duration-200 text-lg w-full md:w-auto">
              Track Your Order
            </Link>
            <Link to="/products" className="inline-block bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 font-bold py-4 px-10 rounded-full shadow-md border border-[#fcd200] transition duration-200 text-lg w-full md:w-auto">
              Continue Shopping
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;

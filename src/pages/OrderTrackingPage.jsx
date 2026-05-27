import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const OrderTrackingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 px-8 py-6 text-white flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold mb-1">Track Your Order</h1>
              <p className="text-blue-100 text-sm">Order ID: AMZ-83071978</p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-sm text-blue-100">Estimated Delivery</p>
              <p className="font-bold text-lg">Monday, May 25</p>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-8 border-b pb-4">Tracking Details</h2>

            {/* Tracking Progress Bar */}
            <div className="relative">
              {/* Vertical line connector */}
              <div className="absolute left-[21px] top-[10px] bottom-[10px] w-1 bg-gray-200 rounded-full z-0"></div>
              {/* Active line connector (up to Shipped) */}
              <div className="absolute left-[21px] top-[10px] h-[50%] w-1 bg-green-500 rounded-full z-0"></div>

              <div className="space-y-12 relative z-10">
                {/* Step 1: Order Confirmed (Done) */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-green-500 flex items-center justify-center border-4 border-white shadow-sm">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div className="ml-6 flex-grow pt-2">
                    <h3 className="font-bold text-lg text-gray-900">Order Confirmed</h3>
                    <p className="text-gray-500 text-sm mt-1">Your order has been placed successfully.</p>
                    <span className="text-xs text-gray-400 mt-2 block font-medium">May 22, 10:45 AM</span>
                  </div>
                </div>

                {/* Step 2: Packed (Done) */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-green-500 flex items-center justify-center border-4 border-white shadow-sm">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                  </div>
                  <div className="ml-6 flex-grow pt-2">
                    <h3 className="font-bold text-lg text-gray-900">Order Packed</h3>
                    <p className="text-gray-500 text-sm mt-1">Seller has processed your order and packed the items.</p>
                    <span className="text-xs text-gray-400 mt-2 block font-medium">May 22, 2:30 PM</span>
                  </div>
                </div>

                {/* Step 3: Shipped (Current/In Transit) */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center border-4 border-white shadow-md animate-pulse">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                  </div>
                  <div className="ml-6 flex-grow pt-2">
                    <h3 className="font-bold text-lg text-blue-600">Shipped (In Transit)</h3>
                    <p className="text-gray-600 text-sm mt-1">Your item has been picked up by the courier partner.</p>
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mt-3 inline-block">
                      <p className="text-xs font-semibold text-blue-800">Courier: BlueDart Express</p>
                      <p className="text-xs text-blue-600 mt-1">Tracking ID: BD9827364129IN</p>
                    </div>
                  </div>
                </div>

                {/* Step 4: Out for Delivery (Pending) */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-sm">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                  </div>
                  <div className="ml-6 flex-grow pt-2">
                    <h3 className="font-bold text-lg text-gray-400">Out for Delivery</h3>
                    <p className="text-gray-400 text-sm mt-1">Delivery executive is out to deliver your package.</p>
                  </div>
                </div>

                {/* Step 5: Delivered (Pending) */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-sm">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                  </div>
                  <div className="ml-6 flex-grow pt-2">
                    <h3 className="font-bold text-lg text-gray-400">Delivered</h3>
                    <p className="text-gray-400 text-sm mt-1">Package successfully delivered to the destination.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-12 text-center pt-8 border-t">
              <Link to="/products" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-200">
                Continue Shopping
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';

const ShippingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    navigate('/order-success');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-[#f0c14b] px-6 py-4 border-b border-yellow-600 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">Edit your address</h2>
            <button onClick={() => navigate(-1)} className="text-sm font-semibold text-gray-800 hover:underline">CANCEL</button>
          </div>
          
          {/* Form */}
          <form onSubmit={submitHandler} className="p-6 space-y-5">
            {/* Country */}
            <div>
              <select className="w-full border border-gray-300 rounded-md px-4 py-3 bg-gray-50 font-medium text-gray-800 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none cursor-pointer">
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
            </div>

            {/* Full Name */}
            <div>
              <label className="block font-bold text-gray-900 mb-1 text-sm">Full name (First and Last name)</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" required />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block font-bold text-gray-900 mb-1 text-sm">Mobile number</label>
              <input type="tel" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" required />
              <p className="text-xs text-gray-600 mt-1">May be used to assist delivery</p>
            </div>

            {/* Location Link (Visual Only) */}
            <div className="pt-2 pb-2 border-b border-t border-gray-100">
              <button type="button" className="flex items-center text-blue-700 font-medium hover:underline">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                Add location on map
              </button>
            </div>

            {/* Address Lines */}
            <div>
              <label className="block font-bold text-gray-900 mb-1 text-sm">Flat, House no., Building, Company, Apartment</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" required />
            </div>

            <div>
              <label className="block font-bold text-gray-900 mb-1 text-sm">Area, Street, Sector, Village</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" required />
            </div>

            <div>
              <label className="block font-bold text-gray-900 mb-1 text-sm">Landmark</label>
              <input type="text" placeholder="E.g. near apollo hospital" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
            </div>

            {/* Pincode and City */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block font-bold text-gray-900 mb-1 text-sm">Pincode</label>
                <input type="text" placeholder="6 digits [0-9] PIN code" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" required />
              </div>
              <div className="w-1/2">
                <label className="block font-bold text-gray-900 mb-1 text-sm">Town/City</label>
                <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" required />
              </div>
            </div>

            {/* State */}
            <div>
              <label className="block font-bold text-gray-900 mb-1 text-sm">State</label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-3 bg-gray-50 font-medium text-gray-800 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none cursor-pointer">
                <option>TAMIL NADU</option>
                <option>MAHARASHTRA</option>
                <option>KARNATAKA</option>
                <option>DELHI</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-gray-200 mt-6">
              <button type="submit" className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 font-bold py-3.5 rounded-lg shadow-sm border border-[#fcd200] transition duration-200 text-base">
                Use this address & Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;

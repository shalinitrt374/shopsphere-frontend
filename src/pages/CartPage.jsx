import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../redux/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="text-gray-300 mb-4">
             <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
          <p className="text-2xl text-gray-600 mb-6 font-medium">Your cart is currently empty.</p>
          <Link to="/products" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition shadow-md">Go back to shopping</Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            {cartItems.map(item => (
              <div key={item._id} className="flex flex-col sm:flex-row items-center bg-white p-6 mb-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <img src={item.image} alt={item.name} className="w-full sm:w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0" />
                <div className="sm:ml-6 flex-grow text-center sm:text-left">
                  <Link to={`/products`} className="font-bold text-xl text-gray-900 hover:text-indigo-600 line-clamp-1">{item.name}</Link>
                  <p className="text-indigo-500 text-sm mt-1 uppercase font-semibold tracking-wider">{item.category}</p>
                  <p className="font-extrabold text-2xl text-gray-900 mt-2">₹{item.price.toLocaleString('en-IN')}</p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-4 sm:mt-0 gap-4">
                  <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-bold border border-gray-200">Qty: {item.qty}</span>
                  <button 
                    onClick={() => dispatch(removeFromCart(item._id))}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 font-semibold px-3 py-1 rounded transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 sticky top-6">
              <h3 className="text-2xl font-bold border-b pb-4 mb-6 text-gray-900">Order Summary</h3>
              <div className="flex justify-between mb-4 text-gray-600 text-lg">
                <span>Items ({totalItems}):</span>
                <span className="font-semibold text-gray-900">₹{totalAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between mb-6 text-gray-600 text-lg">
                <span>Shipping:</span>
                <span className="text-green-600 font-bold">Free</span>
              </div>
              <div className="flex justify-between font-extrabold text-3xl text-gray-900 border-t pt-6 mb-8">
                <span>Total:</span>
                <span className="text-indigo-600">₹{totalAmount.toLocaleString('en-IN')}</span>
              </div>
              <Link to="/payment" className="block text-center w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-indigo-600 transition duration-300 shadow-md text-lg">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

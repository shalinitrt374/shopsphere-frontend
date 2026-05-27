import React, { useState } from 'react';
import { products } from '../data';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Camera, Mic, ScanLine } from 'lucide-react';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  // Select 8 diverse products to feature on the homepage
  const featuredProducts = [
    products.find(p => p._id === '1'), // Floral Western Maxi Dress
    products.find(p => p._id === '5'), // Premium Silk Saree
    products.find(p => p._id === '8'), // Cotton Printed Kurti
    products.find(p => p._id === '10'), // Genuine Leather Handbag
    products.find(p => p._id === '13'), // Casual Cotton T-Shirt
    products.find(p => p._id === '21'), // Kanjeevaram Silk Saree
    products.find(p => p._id === '26'), // Smart Fitness Watch
    products.find(p => p._id === '30'), // Robot Vacuum Cleaner
  ].filter(Boolean); // Filter out any undefined just in case

  return (
    <div className="bg-gray-50 flex flex-col">
      {/* Search Bar Section */}
      <section className="bg-[#1b71e7] py-3 px-4 border-t border-blue-400">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl flex items-center px-4 py-2.5 shadow-sm w-full max-w-4xl mx-auto">
            <Search className="text-gray-600 mr-3 cursor-pointer" size={22} onClick={() => {
              if (searchTerm.trim()) navigate(`/products?search=${searchTerm}`);
            }} />
            <input 
              type="text" 
              placeholder="Search or ask a question" 
              className="flex-grow outline-none text-lg bg-transparent text-gray-800 placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchTerm.trim()) {
                  navigate(`/products?search=${searchTerm}`);
                }
              }}
            />
            <div className="flex items-center space-x-4 text-gray-800 ml-2 border-l pl-4 border-gray-200">
              <Camera size={22} className="hover:text-blue-600 cursor-pointer transition" onClick={() => alert('Image Search Activated ✨')} title="Image Search" />
              <Mic size={22} className="hover:text-blue-600 cursor-pointer transition" onClick={() => alert('Voice Search Activated 🎤')} title="Voice Search" />
              <ScanLine size={22} className="hover:text-blue-600 cursor-pointer transition" onClick={() => alert('Barcode Scanner Activated 🔍')} title="Scan" />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Background */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white text-center py-32 md:py-48"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000)' }} 
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-2xl text-white">
            Welcome to ShopSphere
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-gray-200">
            Discover our premium collection spanning Fashion, Accessories, and Home Appliances. Built for a seamless shopping experience.
          </p>
          <Link to="/products" className="inline-block bg-white text-indigo-900 font-extrabold text-lg py-4 px-12 rounded-full hover:bg-indigo-50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Shop The Collection
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Trending Now</h3>
          <p className="text-gray-500 text-lg">Our most popular items this week</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-16">
          {featuredProducts.map(product => (
            <div key={product._id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col group border border-gray-100">
              <div className="h-64 overflow-hidden relative bg-gray-50">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-indigo-600 px-3 py-1 text-xs font-bold rounded-full shadow-md uppercase tracking-wide">
                  {product.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs text-indigo-500 uppercase tracking-widest font-bold mb-1">{product.subCategory}</span>
                <h3 className="font-extrabold text-lg mb-2 text-gray-900 line-clamp-1">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow text-sm line-clamp-2 leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <span className="font-black text-2xl text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
                  <Link to="/products" className="bg-indigo-50 text-indigo-700 px-5 py-2 rounded-lg font-bold hover:bg-indigo-600 hover:text-white transition-colors duration-300">View</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/products" className="inline-block bg-gray-900 text-white font-bold text-lg py-4 px-12 rounded-full hover:bg-indigo-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

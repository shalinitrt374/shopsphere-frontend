import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { products } from '../data';
import { addToCart } from '../redux/cartSlice';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubCategory, setActiveSubCategory] = useState('All');
  const dispatch = useDispatch();
  const location = useLocation();
  
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  // Effect to handle direct search rendering
  useEffect(() => {
    if (searchQuery) {
      setActiveCategory('All');
      setActiveSubCategory('All');
    }
  }, [searchQuery]);

  const categories = {
    'Women': ['Western Dress', 'Traditional Dress', 'Kurties', 'Watch', 'Bag', 'Perfume'],
    'Men': ['T-shirt', 'Shirt', 'Pant', 'Belt', 'Bag', 'Perfume', 'Watch'],
    'Kids': ['Dress', 'Soft Toys'],
    'Home': ['Appliances', 'Household']
  };

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      // Toggle off if already open
      setActiveCategory('All');
      setActiveSubCategory('All');
    } else {
      setActiveCategory(category);
      setActiveSubCategory('All');
    }
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === 'All' || product.category === activeCategory;
    const subCategoryMatch = activeSubCategory === 'All' || product.subCategory === activeSubCategory;
    const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        product.subCategory.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && subCategoryMatch && searchMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4">
        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Categories</h3>
          <ul className="space-y-2">
            <li>
               <button 
                  onClick={() => { setActiveCategory('All'); setActiveSubCategory('All'); }}
                  className={`w-full text-left px-3 py-2 rounded transition font-bold ${activeCategory === 'All' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-700 hover:bg-indigo-50'}`}
                >
                  All Products
                </button>
            </li>
            {Object.keys(categories).map(cat => (
              <li key={cat} className="flex flex-col">
                <button 
                  onClick={() => handleCategoryClick(cat)}
                  className={`w-full text-left px-3 py-2 rounded transition font-bold flex justify-between items-center ${activeCategory === cat && activeCategory !== 'All' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-700 hover:bg-indigo-50'}`}
                >
                  {cat}
                  <span>{activeCategory === cat ? '−' : '+'}</span>
                </button>
                {activeCategory === cat && (
                  <ul className="ml-4 mt-2 space-y-1 border-l-2 border-indigo-100 pl-2">
                    {categories[cat].map(sub => (
                       <li key={sub}>
                          <button 
                            onClick={() => setActiveSubCategory(sub)}
                            className={`w-full text-left px-3 py-1.5 rounded transition text-sm ${activeSubCategory === sub ? 'bg-indigo-100 text-indigo-800 font-semibold' : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'}`}
                          >
                            {sub}
                          </button>
                       </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4">
        {searchQuery && (
          <div className="mb-6 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg flex items-center">
            <span className="font-semibold mr-2">Search Results for:</span>
            <span className="italic">"{searchQuery}"</span>
          </div>
        )}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          {activeCategory === 'All' 
            ? 'All Products' 
            : activeSubCategory === 'All' 
              ? `${activeCategory} Products`
              : `${activeCategory} - ${activeSubCategory}`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group">
              <div className="h-64 overflow-hidden relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 text-xs font-bold text-indigo-600 rounded shadow-sm opacity-90">
                  {product.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.subCategory}</span>
                <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-1">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow text-sm line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <span className="font-extrabold text-xl text-indigo-600">₹{product.price.toLocaleString('en-IN')}</span>
                  <button 
                    onClick={() => dispatch(addToCart(product))}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 hover:shadow-md transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-16 text-center text-gray-500 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-xl font-medium mb-4">No products found in this category.</p>
              <button onClick={() => { setActiveCategory('All'); setActiveSubCategory('All'); }} className="text-indigo-600 font-semibold hover:underline">View All Products</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;

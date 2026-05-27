import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import ShippingPage from './pages/ShippingPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import OrderTrackingPage from './pages/OrderTrackingPage';

function App() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const userInfo = JSON.parse(localStorage.getItem('userInfo') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    window.location.href = '/';
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-indigo-600 text-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold tracking-wider hover:text-indigo-200 transition">ShopSphere</Link>
            <nav>
              <ul className="flex space-x-6 items-center">
                <li><Link to="/" className="hover:text-indigo-200 transition">Home</Link></li>
                <li><Link to="/products" className="hover:text-indigo-200 transition">Products</Link></li>
                <li>
                  <Link to="/cart" className="hover:text-indigo-200 transition flex items-center">
                    Cart
                    {cartCount > 0 && (
                      <span className="ml-1 bg-white text-indigo-600 text-xs font-bold px-2 py-0.5 rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </li>
                <li>
                  {userInfo ? (
                    <div className="flex items-center gap-3">
                      <span className="text-indigo-100 font-medium">👤 {userInfo.name}</span>
                      <button
                        onClick={handleLogout}
                        className="bg-white text-indigo-600 px-4 py-2 rounded-md font-semibold hover:bg-red-50 hover:text-red-600 transition"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition">Login</Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
            <Route path="/track-order" element={<OrderTrackingPage />} />
            <Route path="/login" element={userInfo ? <Navigate to="/" replace /> : <LoginPage />} />
            <Route path="/register" element={userInfo ? <Navigate to="/" replace /> : <RegisterPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 text-center">
          <p>&copy; {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

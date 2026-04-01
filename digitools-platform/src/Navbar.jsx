import React from 'react';

// Added cartCount as a prop to receive data from App.jsx
const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 font-sans w-full sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" className="text-3xl font-bold text-[#7c3aed] tracking-tight">
          DigiTools
        </a>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#products" className="text-[#475569] hover:text-gray-900 font-medium text-sm transition-colors">
          Products
        </a>
        <a href="#features" className="text-[#475569] hover:text-gray-900 font-medium text-sm transition-colors">
          Features
        </a>
        <a href="#pricing" className="text-[#475569] hover:text-gray-900 font-medium text-sm transition-colors">
          Pricing
        </a>
        <a href="#testimonials" className="text-[#475569] hover:text-gray-900 font-medium text-sm transition-colors">
          Testimonials
        </a>
        <a href="#faq" className="text-[#475569] hover:text-gray-900 font-medium text-sm transition-colors">
          FAQ
        </a>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-6">
        {/* Shopping Cart Icon with Badge */}
        <button 
          aria-label="Cart" 
          className="relative text-[#475569] hover:text-gray-900 transition-colors p-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          
          {/* Badge: Only shows if cartCount is greater than 0 */}
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-[10px] font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        {/* Login Link */}
        <a href="#login" className="text-[#475569] hover:text-gray-900 font-medium text-sm transition-colors">
          Login
        </a>

        {/* CTA Button */}
        <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors shadow-sm">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
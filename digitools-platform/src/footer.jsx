import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      {/* Purple CTA Section */}
      <div className="bg-[#7c3aed] py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-100 mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who are already using Digitools to work smarter.<br></br>
          Start your free trial today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-[#7c3aed] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Explore Products
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
            View Pricing
          </button>
        </div>
        
        <p className="text-purple-200 text-sm mt-6">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>

      {/* Main Dark Footer */}
      <div className="bg-[#0f172a] text-gray-400 pt-20 pb-10 px-8 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">DigiTools</h3>
            <p className="leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Resources & Social */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm mb-8">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            {/* Social Icons - Circle placeholders */}
            <div className="items-center gap-4">
              <h4 className="text-white font-bold mb-6">Social Links</h4>
              <div className='flex items-center gap-4'>
                <div className=" flex items-center gap-4 w-8 h-8 rounded-full bg-white justify-center text-[#0f172a] cursor-pointer hover:bg-gray-200">
                  <i className="fab fa-instagram text-sm"></i>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0f172a] cursor-pointer hover:bg-gray-200">
                  <i className="fab fa-facebook-f text-sm"></i>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0f172a] cursor-pointer hover:bg-gray-200">
                  <i className="fab fa-twitter text-sm"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
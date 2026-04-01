import React, { useState, useEffect } from 'react';

const DigiToolsProducts = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // 1. Fetching from the public folder
        const response = await fetch('/products.json'); 
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        
        // Simulating a slight delay for smooth transition
        setTimeout(() => {
          setProducts(data);
          setLoading(false);
        }, 500);

      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper for tag colors based on tagType
  const getTagStyles = (type) => {
    switch (type) {
      case 'best-seller': return 'bg-orange-100 text-orange-600';
      case 'popular': return 'bg-purple-100 text-purple-600';
      case 'new': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600 mb-4"></div>
        <p className="font-bold text-purple-600">Loading Premium Tools...</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-7xl mx-auto font-sans">
      {/* Header & Tabs */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#1e293b] mb-4">Premium Digital Tools</h2>
        <p className='text-[#627382] py-3'>
          Choose from our curated collection of premium digital products designed <br /> 
          to boost your productivity and creativity.
        </p>
        <div className="inline-flex p-1 bg-gray-50 border border-gray-200 rounded-full mb-10">
          <button 
            onClick={() => setActiveTab('products')} 
            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'products' ? 'bg-[#7c3aed] text-white shadow-md' : 'text-gray-500'}`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab('cart')} 
            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'cart' ? 'bg-[#7c3aed] text-white shadow-md' : 'text-gray-500'}`}
          >
            Cart (0)
          </button>
        </div>
      </div>

      {activeTab === 'products' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col bg-white">
              <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${getTagStyles(product.tagType)}`}>
                {product.tag}
              </span>
              <div className="text-3xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">{product.description}</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#1e293b]">${product.price}</span>
                {/* Safe string handling for period */}
                <span className="text-gray-400 text-sm capitalize">
                    /{product.period?.replace('-', ' ')}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {product.features?.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600 gap-2">
                    <span className="text-green-500 font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white py-3 rounded-xl font-bold transition-colors">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        /* Empty Cart View */
        <div className="py-20 text-center border-2 border-dashed border-gray-200 rounded-3xl">
          <div className="text-5xl mb-4">🛒</div>
          <h3 className="text-xl font-semibold text-gray-800">Your cart is empty</h3>
          <p className="text-gray-400 mt-2">Browse our products to add items here.</p>
        </div>
      )}
    </section>
  );
};

export default DigiToolsProducts;
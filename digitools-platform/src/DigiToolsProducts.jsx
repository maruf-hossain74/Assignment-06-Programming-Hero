import React, { useState, useEffect } from 'react';

const DigiToolsProducts = ({ cart, addToCart, removeFromCart, clearCart }) => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const getTagStyles = (type) => {
    switch (type) {
      case 'best-seller': return 'bg-orange-100 text-orange-600';
      case 'popular': return 'bg-purple-100 text-purple-600';
      case 'new': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  if (loading) return <div className="text-center py-40 font-bold text-purple-600">Loading Tools...</div>;

  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-7xl mx-auto font-sans">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#1e293b] mb-4">Premium Digital Tools</h2>
        <div className="inline-flex p-1 bg-gray-50 border border-gray-200 rounded-full mb-10">
          <button 
            onClick={() => setActiveTab('products')} 
            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'products' ? 'bg-[#7c3aed] text-white' : 'text-gray-500'}`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab('cart')} 
            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'cart' ? 'bg-[#7c3aed] text-white' : 'text-gray-500'}`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {activeTab === 'products' ? (
        /* PRODUCT GRID (3 COLUMNS) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col bg-white">
              <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${getTagStyles(product.tagType)}`}>
                {product.tag}
              </span>
              <div className="text-3xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">{product.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#1e293b]">${product.price}</span>
                <span className="text-gray-400 text-sm capitalize">/{product.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {product.features?.map((f, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600 gap-2"><span className="text-green-500">✓</span> {f}</li>
                ))}
              </ul>
              <button 
                onClick={() => addToCart(product)}
                disabled={cart.some(item => item.id === product.id)}
                className={`w-full py-3 rounded-xl font-bold transition-colors ${
                  cart.some(item => item.id === product.id)
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-[#7c3aed] hover:bg-[#6d28d9] text-white'
                }`}
              >
                {cart.some(item => item.id === product.id) ? 'Added to Cart' : 'Buy Now'}
              </button>
            </div>
          ))}
        </div>
      ) : (
        /* CART VIEW (1 COLUMN) */
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Your Cart</h3>
          {cart.length > 0 ? (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-[#1e293b]">{item.name}</h4>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-8 p-6 border-t border-gray-100 flex flex-col gap-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span>${totalPrice}</span>
                </div>
                <button 
                  onClick={clearCart}
                  className="w-full bg-[#7c3aed] text-white py-4 rounded-xl font-bold text-lg"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center border-2 border-dashed border-gray-200 rounded-3xl">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold text-gray-800">Your cart is empty</h3>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default DigiToolsProducts;
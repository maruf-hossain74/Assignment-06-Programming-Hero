import { useState } from 'react'
import Navbar from './Navbar'
import HeroBanner from './Banner'
import StatsSection from './Stats-section'
import DigiToolsProducts from './DigiToolsProducts'
import Pricing from './PricingPlans'
import Footer from './footer'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    alert("Order Processed Successfully!");
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <HeroBanner />
      <StatsSection />
      <DigiToolsProducts 
        cart={cart} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
        clearCart={clearCart} 
      />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
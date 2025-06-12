import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useCart } from './hooks/useCart';
import { Product } from './types';

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    addToCart(product, quantity);
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleShopNow = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemCount={cart.itemCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main>
        <Hero onShopNowClick={handleShopNow} />
        <ProductGrid
          onAddToCart={handleAddToCart}
          onViewDetails={handleViewDetails}
        />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => {
          setIsProductModalOpen(false);
          setSelectedProduct(null);
        }}
        onAddToCart={handleAddToCart}
      />

      <Cart
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default App;
import React from 'react';
import { ShoppingCart, Phone, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-amber-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Kigali, Rwanda</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>+250 788 123 456</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Free delivery within Kigali • Quality guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-amber-800 text-white p-3 rounded-lg mr-3">
              <span className="text-2xl font-bold">KPM</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">KPM Furniture</h1>
              <p className="text-sm text-gray-600">Quality Furniture for Every Home</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-amber-800 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-amber-800 font-medium transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-amber-800 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-amber-800 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative bg-amber-800 text-white p-3 rounded-lg hover:bg-amber-900 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-amber-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-amber-800 font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-left text-gray-700 hover:text-amber-800 font-medium transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-amber-800 font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-amber-800 font-medium transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
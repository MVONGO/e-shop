import React from 'react';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';

interface HeroProps {
  onShopNowClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNowClick }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-2" />
                Rwanda's Trusted Furniture Store
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Home with
              <span className="text-amber-800 block">Premium Furniture</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our extensive collection of handcrafted furniture pieces designed to bring comfort, 
              style, and elegance to every corner of your home. Quality guaranteed, made in Rwanda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onShopNowClick}
                className="bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-900 transition-colors flex items-center justify-center group"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 hover:text-white transition-colors">
                View Catalog
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quality Guaranteed</h3>
                  <p className="text-sm text-gray-600">Premium materials</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Free Delivery</h3>
                  <p className="text-sm text-gray-600">Within Kigali</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Local Crafted</h3>
                  <p className="text-sm text-gray-600">Made in Rwanda</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful living room furniture"
                className="rounded-2xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Star className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">1000+</p>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-lg mr-3">
                    <Shield className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">5 Years</p>
                    <p className="text-sm text-gray-600">Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
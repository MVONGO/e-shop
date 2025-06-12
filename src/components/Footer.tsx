import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-amber-800 text-white p-2 rounded-lg mr-3">
                <span className="text-xl font-bold">KPM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">KPM Furniture</h3>
                <p className="text-sm text-gray-400">Quality for Every Home</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Rwanda's trusted furniture store, providing premium quality furniture 
              for over a decade. Transform your home with our expertly crafted pieces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Living Room
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Bedroom
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Dining Room
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Office
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Outdoor
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  KG 123 St, Kimisagara<br />
                  Kigali, Rwanda
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                <a
                  href="tel:+250788123456"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  +250 788 123 456
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@kpmfurniture.rw"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  info@kpmfurniture.rw
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} KPM Furniture. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> in Rwanda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
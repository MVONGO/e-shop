import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in learning more about KPM Furniture products.";
    const whatsappUrl = `https://wa.me/250788123456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+250788123456';
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your home? Contact us today for personalized furniture 
            recommendations and expert advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      KG 123 St, Kimisagara<br />
                      Nyarugenge District<br />
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <button
                      onClick={handleCall}
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      +250 788 123 456
                    </button>
                    <p className="text-sm text-gray-500 mt-1">Mon-Sat, 8AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a
                      href="mailto:info@kpmfurniture.rw"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      info@kpmfurniture.rw
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </button>
                <button
                  onClick={handleCall}
                  className="border-2 border-amber-800 text-amber-800 px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 hover:text-white transition-colors flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map/Image */}
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Visit Our Showroom</h4>
                <p className="text-gray-600">
                  See our furniture collection in person at our Kigali showroom
                </p>
              </div>
            </div>
            
            {/* Overlay with store image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="KPM Furniture showroom"
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">KPM Furniture Showroom</h4>
                <p className="text-sm opacity-90">Visit us to explore our full collection</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our furniture experts are here to help you create the perfect living space. 
              Contact us today for a free consultation and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsApp}
                className="bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors"
              >
                Start Your Project
              </button>
              <button className="border-2 border-amber-800 text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 hover:text-white transition-colors">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
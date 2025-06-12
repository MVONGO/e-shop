import React from 'react';
import { Award, Users, Truck, Shield, Heart, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About KPM Furniture
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                For over a decade, KPM Furniture has been Rwanda's trusted partner in creating 
                beautiful, comfortable living spaces. We're a family-owned business based in 
                Kigali, dedicated to providing premium quality furniture that combines traditional 
                craftsmanship with modern design.
              </p>
              
              <p>
                Our skilled artisans use locally sourced materials whenever possible, supporting 
                our community while creating furniture pieces that are built to last. Every item 
                in our collection is carefully selected or crafted to meet our high standards of 
                quality, durability, and style.
              </p>
              
              <p>
                We believe that your home should reflect your personality and lifestyle. That's 
                why we offer a diverse range of furniture styles, from contemporary pieces to 
                classic designs, ensuring there's something perfect for every home in Rwanda.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800 mb-2">1000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="KPM Furniture workshop"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose KPM Furniture?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h4>
              <p className="text-gray-600">
                We use only the finest materials and traditional craftsmanship techniques 
                to ensure every piece meets our exacting standards.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h4>
              <p className="text-gray-600">
                As a Rwandan business, we understand local preferences and climate 
                requirements, ensuring our furniture is perfect for your home.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Free Delivery</h4>
              <p className="text-gray-600">
                We provide free delivery throughout Kigali and surrounding areas, 
                with professional setup service included.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">5-Year Warranty</h4>
              <p className="text-gray-600">
                We stand behind our products with a comprehensive 5-year warranty 
                on all furniture pieces.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Customer Care</h4>
              <p className="text-gray-600">
                Our dedicated customer service team is always ready to help you 
                find the perfect furniture for your needs.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Local Impact</h4>
              <p className="text-gray-600">
                By choosing us, you support local artisans and contribute to 
                Rwanda's growing furniture industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
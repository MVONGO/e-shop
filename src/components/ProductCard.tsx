import React from 'react';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-RW', {
      style: 'currency',
      currency: 'RWF',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
            <button
              onClick={() => onViewDetails(product)}
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Eye className="h-5 w-5" />
            </button>
            <button
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className="bg-amber-800 text-white p-3 rounded-full hover:bg-amber-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.featured && (
            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Sale
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Out of Stock
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-amber-600 font-medium">{product.category}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-800 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Star className="h-4 w-4 text-amber-400 mr-1" />
            <span className="text-sm text-gray-600">{product.material}</span>
          </div>
          <div className="text-sm text-gray-500">
            {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 border-2 border-amber-800 text-amber-800 py-2 px-4 rounded-lg font-medium hover:bg-amber-800 hover:text-white transition-colors"
          >
            View Details
          </button>
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="flex-1 bg-amber-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
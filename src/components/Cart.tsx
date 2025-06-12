import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Cart as CartType } from '../types';

interface CartProps {
  cart: CartType;
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

const Cart: React.FC<CartProps> = ({
  cart,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-RW', {
      style: 'currency',
      currency: 'RWF',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleCheckout = () => {
    const message = `Hello! I'm interested in purchasing the following items from KPM Furniture:

${cart.items.map(item => 
  `• ${item.product.name} (Quantity: ${item.quantity}) - ${formatPrice(item.product.price * item.quantity)}`
).join('\n')}

Total: ${formatPrice(cart.total)}

Please let me know about availability and delivery options.`;

    const whatsappUrl = `https://wa.me/250788123456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <ShoppingBag className="h-6 w-6 mr-2" />
            Shopping Cart ({cart.itemCount})
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {cart.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center p-6">
            <ShoppingBag className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-500">Add some furniture to get started!</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 p-6 space-y-4">
              {cart.items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">{item.product.name}</h3>
                    <p className="text-sm text-gray-500">{item.product.category}</p>
                    <p className="font-semibold text-amber-800">{formatPrice(item.product.price)}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span className="text-amber-800">{formatPrice(cart.total)}</span>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-amber-800 text-white py-3 px-4 rounded-lg font-semibold hover:bg-amber-900 transition-colors"
                >
                  Checkout via WhatsApp
                </button>
                
                <button
                  onClick={onClearCart}
                  className="w-full border border-red-300 text-red-600 py-2 px-4 rounded-lg font-medium hover:bg-red-50 transition-colors"
                >
                  Clear Cart
                </button>
              </div>

              <div className="text-xs text-gray-500 text-center">
                <p>Free delivery within Kigali</p>
                <p>Payment on delivery available</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
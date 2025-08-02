import React from 'react';
import { X, Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import Button from './Button';

const CartDrawer = () => {
  const { 
    items, 
    isOpen, 
    cartTotal, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    closeCart 
  } = useCart();

  // Format price to Indian Rupees
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleProceedToCheckout = () => {
    // TODO: Implement checkout functionality
    console.log('Proceeding to checkout with items:', items);
    closeCart();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface border-l border-border shadow-2xl z-50 animate-slide-down">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <ShoppingBag size={24} className="text-primary" />
              <h2 className="text-xl font-semibold text-text-primary">
                Shopping Cart
              </h2>
              {items.length > 0 && (
                <span className="bg-primary-100 text-primary text-sm font-medium px-2 py-1 rounded-full">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </span>
              )}
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary-50 transition-colors duration-200"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-text-tertiary mb-4" />
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  Your cart is empty
                </h3>
                <p className="text-text-secondary">
                  Add some products to get started!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 p-4 bg-surface-secondary rounded-lg border border-border">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image || '/assets/images/no_image.png'}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src = '/assets/images/no_image.png';
                        }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-text-primary truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-text-secondary mb-2">
                        {item.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary">
                          {formatPrice(item.price)}
                        </span>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-1 rounded-md text-text-secondary hover:text-primary hover:bg-primary-50 transition-colors duration-200"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium text-text-primary min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-1 rounded-md text-text-secondary hover:text-primary hover:bg-primary-50 transition-colors duration-200"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex-shrink-0 p-2 text-text-tertiary hover:text-error hover:bg-error-50 rounded-lg transition-colors duration-200"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              {/* Subtotal */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-text-primary">
                  Subtotal
                </span>
                <span className="text-xl font-bold text-primary">
                  {formatPrice(cartTotal)}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={handleProceedToCheckout}
                  variant="primary"
                  fullWidth
                  className="spring-transition"
                >
                  Proceed to Checkout
                </Button>
                
                <Button
                  onClick={clearCart}
                  variant="outline"
                  fullWidth
                  className="text-error border-error hover:bg-error-50 hover:text-error"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer; 
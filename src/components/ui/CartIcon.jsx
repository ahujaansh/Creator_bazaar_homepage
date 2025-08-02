import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const CartIcon = ({ className = '', onClick }) => {
  const { cartItemCount, toggleCart } = useCart();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else {
      toggleCart();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary-50 transition-all duration-200 touch-target ${className}`}
      aria-label="Shopping cart"
    >
      <ShoppingCart size={20} />
      
      {/* Cart badge */}
      {cartItemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
          {cartItemCount > 99 ? '99+' : cartItemCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon; 
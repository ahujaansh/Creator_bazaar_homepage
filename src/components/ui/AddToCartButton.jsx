import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import Button from './Button';

const AddToCartButton = ({ product, variant = "primary", className = "", children }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1
    };
    
    addToCart(cartItem);
  };

  return (
    <Button
      onClick={handleAddToCart}
      variant={variant}
      className={`spring-transition ${className}`}
      iconName="ShoppingCart"
      iconPosition="left"
    >
      {children || 'Add to Cart'}
    </Button>
  );
};

export default AddToCartButton; 
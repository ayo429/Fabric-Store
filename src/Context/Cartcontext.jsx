// context/CartContext.js
import React, { createContext, useContext, useState,useEffect } from 'react';
import toast from 'react-hot-toast';
const CartContext = createContext();

export function CartProvider({ children }) {
  // Load cart from localStorage on first render
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      // If item already in cart, increase quantity
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        toast.success(`${item.color} quantity updated!`);
        return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      toast.success(`${item.color} added to cart!`);
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
     toast.error('Item removed from cart');
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((i) => i.id === id ? { ...i, quantity: i.quantity + 1 } : i)
    );
     toast.success('Quantity increased');
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((i) => i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i)
    );
     toast.success('Quantity decreased');
  };
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
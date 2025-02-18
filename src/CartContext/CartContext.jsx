import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  // 🔹 Clear Cart Function
  const clearCart = () => {
    setCartItems([]); // কার্ট খালি করে দেবে
  };

  // 🛒 Add to Cart Function
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // ➕ Increase Quantity
  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ➖ Decrease Quantity
  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  // 🗑️ Remove Item from Cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // 💰 Calculate Total Price
  const totalPrice = Number(cartItems.reduce(
    (total, item) => total + (parseFloat(item.price.replace(/,/g, '')) || 0) * (item.quantity || 1), 
    0
  ).toFixed(2));
  


  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

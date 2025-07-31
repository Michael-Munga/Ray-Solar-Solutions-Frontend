import { useState, useEffect, useCallback } from "react";
import {
  getCart,
  addToCart as addToCartAPI,
  updateCartItem,
  deleteCartItem,
} from "@/services/CartService";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load cart items from backend on mount
  useEffect(() => {
    const load = async () => {
      try {
        const items = await getCart();
        setCartItems(items);
      } catch (err) {
        console.error("Failed to load cart", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const addToCart = useCallback((item) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.product_id === item.id || i.id === item.id
      );
      if (existing) {
        return prev.map((i) =>
          i.product_id === item.id || i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId, quantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  }, []);

  return {
    cartItems,
    loading,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
};

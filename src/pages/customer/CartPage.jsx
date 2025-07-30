import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import {
  getCart,
  addToCart,
  updateCartItem,
  deleteCartItem,
} from "@/services/CartService";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const items = await getCart();
        setCartItems(items || []);
      } catch (err) {
        console.error("Failed to load cart:", err);
      }
    };
    fetchCart();
  }, []);

  const increment = async (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;

    try {
      const updatedItem = await updateCartItem(id, item.quantity + 1);
      setCartItems((prev) => prev.map((i) => (i.id === id ? updatedItem : i)));
    } catch (err) {
      console.error("Increment failed:", err);
    }
  };

  const decrement = async (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;

    if (item.quantity <= 1) {
      await removeItem(id);
    } else {
      try {
        const updatedItem = await updateCartItem(id, item.quantity - 1);
        setCartItems((prev) =>
          prev.map((i) => (i.id === id ? updatedItem : i))
        );
      } catch (err) {
        console.error("Decrement failed:", err);
      }
    }
  };

  const removeItem = async (id) => {
    try {
      await deleteCartItem(id);
      setCartItems((prev) => prev.filter((i) => i.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center text-gray-500">
        <h2 className="text-2xl font-semibold text-green-800">
          Your cart is empty.
        </h2>
        <p className="text-sm mt-2 text-gray-600">
          Explore our solar products to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-900">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => {
          const itemTotal = parseFloat(item.price) * item.quantity;

          return (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-6 border rounded-xl p-4 sm:p-6 shadow-md bg-white hover:shadow-lg transition"
            >
              <img
                src={item.image || "/placeholder.jpg"}
                alt={item.name}
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg border"
              />
              <div className="flex-1 w-full">
                <h2 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h2>
                <p className="text-green-700 font-medium text-sm mt-1">
                  ${parseFloat(item.price).toFixed(2)} per unit
                </p>

                <div className="flex items-center mt-3 gap-2">
                  <button
                    className="px-3 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
                    onClick={() => decrement(item.id)}
                  >
                    −
                  </button>
                  <span className="px-4 text-md">{item.quantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
                    onClick={() => increment(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto gap-4 mt-4 sm:mt-0">
                <span className="text-lg font-bold text-green-800">
                  ${itemTotal.toFixed(2)}
                </span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 border-t pt-6 text-right">
        <p className="text-2xl font-bold text-green-900">
          Total: ${totalPrice.toFixed(2)}
        </p>
        <button className="mt-4 px-6 py-3 bg-lime-500 hover:bg-lime-600 text-green-900 rounded shadow font-semibold transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

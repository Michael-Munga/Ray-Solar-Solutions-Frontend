import React from 'react';
import { useCart } from '../../contexts/CartContext';

const Cart = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-teal-800">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-teal-100 rounded-lg shadow p-4 flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 object-cover rounded-md mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold text-teal-900">{item.name}</h2>
                  <p className="text-teal-800">Price: ${item.price}</p>
                  <p className="text-teal-800">Quantity: {item.quantity}</p>
                </div>
                <div className="ml-auto font-bold text-teal-700">${item.price * item.quantity}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right font-bold text-lg text-teal-900">Total: ${totalPrice}</div>
          <button className="mt-4 bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

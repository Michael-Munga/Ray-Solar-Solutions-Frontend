import React from 'react';

const Orders = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <table className="min-w-full bg-orange-100 rounded-lg shadow">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-orange-300">Order ID</th>
            <th className="py-2 px-4 border-b border-orange-300">Date</th>
            <th className="py-2 px-4 border-b border-orange-300">Status</th>
            <th className="py-2 px-4 border-b border-orange-300">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-orange-300">1234</td>
            <td className="py-2 px-4 border-b border-orange-300">2024-06-01</td>
            <td className="py-2 px-4 border-b border-orange-300">Shipped</td>
            <td className="py-2 px-4 border-b border-orange-300">$1350</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-orange-300">1235</td>
            <td className="py-2 px-4 border-b border-orange-300">2024-05-20</td>
            <td className="py-2 px-4 border-b border-orange-300">Processing</td>
            <td className="py-2 px-4 border-b border-orange-300">$300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

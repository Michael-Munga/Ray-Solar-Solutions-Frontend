import React, { useState } from 'react';
import api from '@/services/api';

const PaymentForm = ({ amount, onSuccess, onCancel }) => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const validatePhone = (phone) => {
    // Basic validation for Kenyan phone numbers
    const phoneRegex = /^(\+?254|0)(7\d{8}|1\d{8})$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validatePhone(phone)) {
      setError('Please enter a valid Kenyan phone number (e.g., 0712345678 or +254712345678)');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      // Format phone number for M-Pesa (remove + and leading 0)
      let formattedPhone = phone;
      if (phone.startsWith('+254')) {
        formattedPhone = phone.replace('+254', '254');
      } else if (phone.startsWith('0')) {
        formattedPhone = phone.replace('0', '254');
      }

      // Initiate M-Pesa STK push
      const response = await api.post('/api/mpesa/stkpush', {
        phone: formattedPhone,
        amount: amount
      });

      if (response.data && response.data.ResponseCode === "0") {
        setSuccess(true);
        // Wait a bit before calling onSuccess to allow user to complete payment
        setTimeout(() => {
          onSuccess();
        }, 3000);
      } else {
        setError(response.data?.ResponseDescription || 'Failed to initiate payment. Please try again.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to process payment. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">M-Pesa Payment</h2>
      
      {success ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">Payment Initiated! </strong>
          <span className="block sm:inline">
            Please check your phone ({phone}) to complete the payment with M-Pesa STK push.
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              M-Pesa Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g., 0712345678 or +254712345678"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <p className="mt-1 text-sm text-gray-500">
              Enter your M-Pesa registered phone number
            </p>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">Amount to Pay:</span>
              <span className="text-xl font-bold text-amber-600">KSh {amount.toFixed(2)}</span>
            </div>
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error! </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`flex-1 py-2 px-4 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 ${
                loading ? 'bg-amber-400' : 'bg-amber-600 hover:bg-amber-700'
              }`}
            >
              {loading ? 'Processing...' : 'Pay with M-Pesa'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PaymentForm;

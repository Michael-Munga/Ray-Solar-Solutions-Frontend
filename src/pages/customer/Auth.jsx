import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-md mx-auto p-6 bg-purple-100 rounded-lg shadow mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center text-purple-900">{isLogin ? 'Login' : 'Register'}</h1>
      <div className="mb-4 flex justify-center space-x-4">
        <button
          className={`px-4 py-2 rounded ${
            isLogin ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-700'
          }`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 rounded ${
            !isLogin ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-700'
          }`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>
      <form>
        {!isLogin && (
          <div className="mb-4">
            <label className="block mb-1 font-semibold text-purple-800" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-purple-300 rounded px-3 py-2"
              placeholder="Your full name"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-purple-800" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-purple-300 rounded px-3 py-2"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-purple-800" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-purple-300 rounded px-3 py-2"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Auth;

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500">
      <form className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-green-500 text-2xl font-bold text-gray-800 mb-6">Chat App</h1>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="inline-email"
          >
            Email
          </label>
          <input
            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
            id="inline-email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="inline-password"
          >
            Password
          </label>
          <input
            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
            id="inline-password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center mb-4">
          <button
            className="w-full shadow bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Login
          </button>
        </div>

        <div className="text-center">
          <Link
            className="text-blue-700 hover:underline font-semibold"
            type="button"
            to="/register"
          >
            Don't have an account? Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500 via-purple-400">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Website!
        </h1>
        <p className="text-gray-600 mb-6">
          We are excited to have you here. Please register to get started and
          enjoy all our features.
        </p>
        <Link
          to="/register"
          className="inline-block bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

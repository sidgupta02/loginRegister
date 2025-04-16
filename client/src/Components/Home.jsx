import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="bg-white p-8 rounded shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page! 🎉</h1>
      <p className="mb-6 text-gray-600">You're successfully logged in.</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;

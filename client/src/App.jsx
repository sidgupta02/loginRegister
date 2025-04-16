import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // checks if user is logged in

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

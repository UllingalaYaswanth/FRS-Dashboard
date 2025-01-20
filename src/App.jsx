import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Departments from './pages/Departments';
import AttendanceStats from './pages/Statistics';
import Login from '../src/pages/SignIn';

function App() {
  // Initialize `isLoggedIn` state based on localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect to Login if not logged in */}
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
          }
        />
        {/* Protected Routes */}
        {isLoggedIn && (
          <Route path="/" element={<Layout onLogout={handleLogout} />}>
            <Route path="home" element={<Home />} />
            <Route path="statistics" element={<AttendanceStats />} />
            <Route path="department" element={<Departments />} />
          </Route>
        )}
        {/* Fallback Route */}
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/home" : "/"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

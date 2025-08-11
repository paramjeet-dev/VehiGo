import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoutes = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const BACKEND = import.meta.env.VITE_BACKEND;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${BACKEND}/auth/me`, {
          withCredentials: true,
        });
        console.log(res.data);
        setIsAuthenticated(true);
      } catch (err) {
        console.log(err);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    // Loading state: you can return null or a spinner here
    return <div>Loading...</div>;
  }

  if (isAuthenticated === false) {
    // Not authenticated — redirect to login
    return <Navigate to="/login" replace />;
  }

  // Authenticated — render protected children
  return <>{children}</>;
};

export default ProtectedRoutes;

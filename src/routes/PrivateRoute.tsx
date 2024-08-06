import { Navigate } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ children }) => {

  const isAuthenticated = () => {
    return localStorage.getItem("user") ? true : false;
  };

  return isAuthenticated() ? (

    { children }

  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute
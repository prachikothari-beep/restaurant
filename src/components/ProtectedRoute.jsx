// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Agar login nahi hai
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Agar role allowed nahi hai
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />; // Ya unauthorized page
  }

  // Role allowed → render children
  return children;
};

export default ProtectedRoute;

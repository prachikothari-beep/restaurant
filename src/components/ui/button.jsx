// src/components/ui/button.jsx
import React from "react";

const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

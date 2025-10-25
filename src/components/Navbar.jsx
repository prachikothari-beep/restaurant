import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/">QR Menu</Link>
      <div className="space-x-4">
        <Link to="/cart">Cart</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

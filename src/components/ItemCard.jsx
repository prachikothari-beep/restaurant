import React from 'react';
import { motion } from 'framer-motion';

export default function ItemCard({item, addToCart}) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.95 }}
      className="p-4 border rounded-lg bg-white flex flex-col items-center"
    >
      <img src={item.imageUrl || '/placeholder.png'} alt={item.name} className="w-full h-32 object-cover rounded-md mb-2" />
      <h2 className="font-bold text-lg">{item.name}</h2>
      <p className="text-gray-600 text-sm">{item.description}</p>
      <p className="mt-1 font-semibold">₹ {item.price}</p>
      <button 
        onClick={()=>addToCart(item)} 
        className="mt-2 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </motion.div>
  );
}

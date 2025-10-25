import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPanel({cart, removeFromCart, placeOrder}) {
  const total = cart.reduce((acc,i)=>acc+i.price*i.qty,0);

  return (
    <motion.div 
      initial={{x: '100%'}} 
      animate={{x: 0}} 
      exit={{x: '100%'}}
      transition={{type: 'spring', stiffness: 120}}
      className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 flex flex-col"
    >
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence>
          {cart.map((item,idx)=>(
            <motion.div 
              key={item._id} 
              initial={{opacity:0, x:50}} 
              animate={{opacity:1, x:0}} 
              exit={{opacity:0, x:50}}
              className="flex justify-between mb-2"
            >
              <div>
                <div>{item.name} x {item.qty}</div>
                {item.note && <div className="text-sm text-gray-500">{item.note}</div>}
              </div>
              <div className="flex flex-col items-end">
                <div>₹ {item.price*item.qty}</div>
                <button onClick={()=>removeFromCart(item._id)} className="text-red-500 text-sm">Remove</button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-4 font-bold">Total: ₹ {total}</div>
      <button onClick={placeOrder} className="mt-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Place Order
      </button>
    </motion.div>
  );
}

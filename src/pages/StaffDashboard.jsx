import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';

export default function StaffDashboard() {
  const [orders,setOrders] = useState([]);

  useEffect(()=>{
    const fetchOrders = async ()=>{
      const res = await api.get('/orders?status=placed');
      setOrders(res.data);
    };
    fetchOrders();
    const interval = setInterval(fetchOrders,5000);
    return ()=>clearInterval(interval);
  },[]);

  const updateStatus = async (id,status)=>{
    await api.patch(`/orders/${id}/status`,{status});
    setOrders(orders.map(o=>o._id===id?{...o,status}:o));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Staff Dashboard - Placed Orders</h2>
      <AnimatePresence>
      {orders.map(order=>(
        <motion.div 
          key={order._id}
          initial={{opacity:0, y:-20}} 
          animate={{opacity:1, y:0}} 
          exit={{opacity:0, y:-20}}
          className="border p-4 mb-2 rounded shadow flex justify-between items-center"
        >
          <div>
            <div className="font-semibold">Table {order.tableId.number}</div>
            {order.items.map(i=><div key={i.menuItemId._id}>{i.menuItemId.name} x {i.qty}</div>)}
          </div>
          <button onClick={()=>updateStatus(order._id,'preparing')} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
            Mark Preparing
          </button>
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  );
}

// const express = require('express');
// const router = express.Router();
// const Order = require('../models/Order');
// const Table = require('../models/Table');

// // Place order (customer)
// router.post('/', async (req,res)=>{
//   const {tableSlug, items} = req.body;
//   const table = await Table.findOne({qrSlug:tableSlug});
//   if(!table) return res.status(404).json({error:'Table not found'});
//   let total = 0;
//   items.forEach(i=>total+=i.price*i.qty);
//   const order = new Order({tableId:table._id, items, totals:total});
//   await order.save();
//   res.json(order);
// });

// // Get orders by table/status (staff)
// router.get('/', async (req,res)=>{
//   const {status,table} = req.query;
//   const query = {};
//   if(status) query.status = status;
//   if(table) query.tableId = table;
//   const orders = await Order.find(query).populate('tableId').populate('items.menuItemId');
//   res.json(orders);
// });

// // Update order status (staff)
// router.patch('/:id/status', async (req,res)=>{
//   const {status} = req.body;
//   const order = await Order.findById(req.params.id);
//   if(!order) return res.status(404).json({error:'Order not found'});
//   order.status = status;
//   await order.save();
//   res.json(order);
// });

// module.exports = router;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from backend API
    axios.get('http://localhost:5000/api/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul className="space-y-2">
          {orders.map(order => (
            <li key={order._id} className="p-2 border rounded">
              <p>Table: {order.tableId.qrSlug}</p>
              <p>Total: ₹{order.totals}</p>
              <p>Status: {order.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

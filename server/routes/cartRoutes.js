const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const MenuItem = require('../models/MenuItem');

// 🔹 Get cart items for a table
router.get('/:tableSlug', async (req, res) => {
  const { tableSlug } = req.params;
  const cart = await Cart.findOne({ tableSlug }).populate('items.itemId');
  res.json(cart || { tableSlug, items: [] });
});

// 🔹 Add item to cart
router.post('/:tableSlug/add', async (req, res) => {
  const { tableSlug } = req.params;
  const { itemId } = req.body;

  let cart = await Cart.findOne({ tableSlug });
  if (!cart) cart = new Cart({ tableSlug, items: [] });

  const existing = cart.items.find(i => i.itemId.toString() === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.items.push({ itemId, qty: 1 });
  }

  await cart.save();
  res.json(await cart.populate('items.itemId'));
});

// 🔹 Remove item from cart
router.post('/:tableSlug/remove', async (req, res) => {
  const { tableSlug } = req.params;
  const { itemId } = req.body;

  const cart = await Cart.findOne({ tableSlug });
  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  cart.items = cart.items.filter(i => i.itemId.toString() !== itemId);
  await cart.save();

  res.json(await cart.populate('items.itemId'));
});

// 🔹 Clear cart after placing order
router.post('/:tableSlug/clear', async (req, res) => {
  await Cart.findOneAndDelete({ tableSlug });
  res.json({ message: 'Cart cleared' });
});

module.exports = router;

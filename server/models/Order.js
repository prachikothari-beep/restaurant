 const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' },
  items: [{ menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }, qty: Number, note: String }],
  status: { type: String, enum: ['placed','preparing','ready','served','canceled'], default: 'placed' },
  totals: Number
},{ timestamps: true });

module.exports = mongoose.model('Order', orderSchema);

 const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  tableSlug: { type: String, required: true }, // identify the customer/table
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
      qty: { type: Number, default: 1 },
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);


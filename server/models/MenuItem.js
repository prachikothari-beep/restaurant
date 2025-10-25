 const mongoose = require('mongoose');
const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuCategory' },
  imageUrl: String,
  availability: { type: Boolean, default: true },
  tags: [String]
});
menuItemSchema.index({ categoryId: 1, name: 1 });
module.exports = mongoose.model('MenuItem', menuItemSchema);

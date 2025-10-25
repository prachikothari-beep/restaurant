 const mongoose = require('mongoose');
const menuCategorySchema = new mongoose.Schema({
  name: String,
  displayOrder: Number,
  active: { type: Boolean, default: true }
});
module.exports = mongoose.model('MenuCategory', menuCategorySchema);

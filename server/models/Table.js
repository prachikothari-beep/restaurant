const mongoose = require('mongoose');
const tableSchema = new mongoose.Schema({
  number: Number,
  qrSlug: String,
  activeSessionId: String
});
module.exports = mongoose.model('Table', tableSchema);

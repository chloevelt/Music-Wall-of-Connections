const mongoose = require('mongoose');
const ConnectionSchema = new mongoose.Schema({
  member1_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
  member2_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
  relationship_type: String // e.g., 'romantic'
});
module.exports = mongoose.model('Connection', ConnectionSchema);

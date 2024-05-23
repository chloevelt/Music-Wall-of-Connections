const mongoose = require('mongoose');
const MemberSchema = new mongoose.Schema({ name: String });
module.exports = mongoose.model('Member', MemberSchema);

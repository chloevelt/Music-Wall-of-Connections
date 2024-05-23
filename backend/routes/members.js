const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

router.get('/', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Connection = require('../models/Connection');

router.get('/', async (req, res) => {
  const connections = await Connection.find();
  res.json(connections);
});

router.post('/find', async (req, res) => {
  const { member1, member2 } = req.body;

  const queue = [[member1]];
  const visited = new Set();
  visited.add(member1);

  while (queue.length > 0) {
    const path = queue.shift();
    const lastNode = path[path.length - 1];

    if (lastNode === member2) {
      return res.json(path);
    }

    const neighbors = await Connection.find({ member1_id: lastNode }).populate('member2_id');
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.member2_id.id)) {
        visited.add(neighbor.member2_id.id);
        const newPath = [...path, neighbor.member2_id.id];
        queue.push(newPath);
      }
    }
  }
  res.status(404).json({ message: 'No connection found' });
});

module.exports = router;

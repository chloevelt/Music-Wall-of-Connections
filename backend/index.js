const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/band', { useNewUrlParser: true, useUnifiedTopology: true });

const Member = require('./models/Member');
const Connection = require('./models/Connection');

app.use(express.json());

app.use('/members', require('./routes/members'));
app.use('/connections', require('./routes/connections'));

app.listen(3000, () => console.log('Server running on port 3000'));

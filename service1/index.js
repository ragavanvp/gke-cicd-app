const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL || 'mongodb://mongo:27017/service1', {
  useNewUrlParser: true, useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('Hello from Service 1');
});

app.listen(3000, () => {
  console.log('Service1 listening on port 3000');
});


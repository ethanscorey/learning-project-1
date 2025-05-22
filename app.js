const express = require('express');
const app = express();
const port = 3000;

app.get('/api/ping', (req, res) => {
  res.status(200).send('pong');
});

module.exports = app;

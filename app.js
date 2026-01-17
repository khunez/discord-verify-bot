const express = require('express');
const path = require('path');
const app = express();

// บรรทัดนี้จะทำให้เมื่อเข้า /home ระบบจะไปดึง home/index.html มาให้เองค่ะ
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;
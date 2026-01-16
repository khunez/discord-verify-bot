const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  // ต้องเป็น __dirname (ขีดล่าง 2 ตัว) เท่านั้นนะคะ
  res.sendFile(path.join(__dirname, 'index.html'));
});

// บรรทัดนี้สำคัญมากสำหรับ Vercel ค่ะ
module.exports = app;
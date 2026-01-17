const express = require('express');
const path = require('path');
const app = express();

// อนุญาตให้เข้าถึงไฟล์ Static ทั้งหมดในหน้าหลัก (index.html, home.html, ฯลฯ)
app.use(express.static(path.join(__dirname, '/')));

// ตั้งค่าหน้าแรกให้แสดง index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ส่งออกแอปเพื่อให้ Vercel นำไปรันต่อได้
module.exports = app;
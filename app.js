const express = require('express');
const path = require('path');
const app = express();

// อนุญาตให้คนเข้าถึงไฟล์ Static ทั้งหมด (html, css, js) ที่วางไว้หน้าหลัก
app.use(express.static(path.join(__dirname, '/')));

// ตั้งค่าให้หน้าแรกเรียก index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ส่งออก module สำหรับ Vercel
module.exports = app;
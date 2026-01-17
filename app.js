const express = require('express');
const path = require('path');
const app = express();

// 1. ตั้งค่าให้ Express เข้าถึงไฟล์ในโฟลเดอร์ต่างๆ ได้ (สำคัญมากค่ะ)
app.use(express.static(path.join(__dirname, '/')));

// 2. จัดการ Route หลัก
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 3. จัดการ Route สำหรับหน้าอื่นๆ (ถ้าต้องการ URL แบบสวยๆ)
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home/home.html')); // แก้ชื่อไฟล์ให้ตรงกับที่คุณส่งมาคือ home.html
});

app.get('/fivem', (req, res) => {
    res.sendFile(path.join(__dirname, 'fivem/fivem.html'));
});

app.get('/rules', (req, res) => {
    res.sendFile(path.join(__dirname, 'rules/rules.html'));
});

module.exports = app;
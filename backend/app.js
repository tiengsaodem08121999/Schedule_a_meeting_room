const express = require('express');
const app = express();
const port = 3000;

// Kết nối MySQL (thêm chi tiết sau)
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'splus@2024',
  database: 'svelte'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`);
});
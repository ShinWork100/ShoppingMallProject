// server.js
const express = require('express');
const mysql = require('mysql2');
const app = express();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'mall',
  connectionLimit: 10,
});

// Respond with a simple HTML page at the root path ("/")
app.get('/', (req, res) => {
  res.send('<html><body><h1>Hello, this is my React app!</h1></body></html>');
});

// Get a list of users from the database
app.get('/api/users', (req, res) => {
  pool.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Error fetching users' });
    } else {
      res.json(results);
    }
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port', port));

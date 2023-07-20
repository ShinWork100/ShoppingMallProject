const express = require('express');
const app = express();

// Respond with a simple HTML page at the root path ("/")
app.get('/', (req, res) => {
  res.send('<html><body><h1>Hello, this is my React app!</h1></body></html>');
});

// Get a list of users 
app.get('/api/users', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'John Doe',
      age: 32
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 30
    }
  ]);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening'));

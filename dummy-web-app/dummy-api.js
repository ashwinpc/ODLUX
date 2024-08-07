// const express = require('express');
  const express = require('express');
  const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

// Endpoint to get a random number
app.get('/api/number', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
  res.json({ number: randomNumber });
});

// Endpoint to get a random message
const messages = [
  'Hello, World!',
  'Welcome to ODLUX!',
  'This is a dummy API.',
  'Random message here!',
  'Another random text!'
];

app.get('/api/message', (req, res) => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  res.json({ message: messages[randomIndex] });
});

app.listen(port, () => {
  console.log(`Dummy API server listening at http://localhost:${port}`);
});

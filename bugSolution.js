const express = require('express');
const app = express();

// Set the limit for JSON body size
app.use(express.json({ limit: '50mb' })); // Adjust limit as needed

app.post('/data', (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: 'Invalid JSON request body' });
  }
  const data = req.body;
  // ... process data ...
  res.send('OK');
});

// ... other routes ...

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname)));

// Main route - serve index.html
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  console.log(`Trying to serve: ${filePath}`);
  console.log(`File exists: ${fs.existsSync(filePath)}`);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error serving file:', err);
      res.status(500).send('Error');
    }
  });
});

// Catch-all route
app.all('*', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error serving file:', err);
      res.status(500).send('Error loading app');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started on port ${PORT}`);
});

// Handle errors
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(0);
});

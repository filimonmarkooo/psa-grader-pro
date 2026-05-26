const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Determine where index.html is located
const publicPath = path.join(__dirname, 'public');
const indexPath = path.join(publicPath, 'index.html');

// Serve static files from public folder
app.use(express.static(publicPath));

// Health check for Railway
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Serve the main app
app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

// 404 fallback to index.html (for SPA routing)
app.use((req, res) => {
  res.sendFile(indexPath);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`PSA Grader Pro running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});

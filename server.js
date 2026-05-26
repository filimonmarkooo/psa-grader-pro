const express = require('express');
const path = require('path');
const app = express();

// Serve static files from root
app.use(express.static(path.join(__dirname)));

// Health check for Railway
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Serve the main app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 fallback to index.html (for SPA routing)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`PSA Grader Pro running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});

const express = require('express');
const path = require('path');
const app = express();

// Serve everything in the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`PSA Grader Pro listening on port ${PORT}`);
});

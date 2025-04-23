const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve AASA file
app.get('/.well-known/apple-app-site-association', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname, 'apple-app-site-association'));
});

// Handle deep links like /app/phone-input
app.get('/app/phone-input', (req, res) => {
  res.send('Deep link page: /app/phone-input');
});

// Optional home route
app.get('/', (req, res) => {
  res.send('Server running. AASA file and deep links are ready.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

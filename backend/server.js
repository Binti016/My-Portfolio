const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import CORS

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/api/messages', (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  const newMessage = { email, message, timestamp: new Date() };

  // Read existing messages
  const filePath = path.join(__dirname, 'messages.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).json({ error: 'Failed to read messages' });
    }

    const messages = data ? JSON.parse(data) : [];
    messages.push(newMessage);

    // Save updated messages to JSON file
    fs.writeFile(filePath, JSON.stringify(messages, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to save message' });
      }
      res.status(200).json({ message: 'Message submitted successfully' });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// for running the server:node server.js
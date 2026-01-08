const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Moderation endpoint
app.get("/moderate", (req, res) => {
  const text = (req.query.text || "").toLowerCase();

  // List of banned words (expand if you like)
  const bannedWords = [
    "hitler",
    "nigger",
    "suicide",
    "kys",
    "porn",
    "pedophile",
    "cp",
    "rape",
    "grape"
  ];

  for (let i = 0; i < bannedWords.length; i++) {
    if (text.includes(bannedWords[i])) {
      return res.json({ allowed: false });
    }
  }

  res.json({ allowed: true });
});

// Simple root endpoint to check server
app.get("/", (req, res) => {
  res.send("Moderation server running!");
});

// Start server
app.listen(port, () => {
  console.log(`Moderation server running on port ${port}`);
});

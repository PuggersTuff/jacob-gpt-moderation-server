const express = require("express");
const app = express();

app.use(express.json());

app.post("/moderate", (req, res) => {
  const text = (req.body.text || "").toLowerCase();

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

app.get("/", (req, res) => {
  res.send("Moderation server running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

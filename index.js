app.get("/moderate", (req, res) => {
  const text = (req.query.text || "").toLowerCase();

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

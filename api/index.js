const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;

// CSV file path
const csvFilePath = "scores.csv";

app.use(bodyParser.json());

// POST endpoint to write score and name
app.post("/submit-score", (req, res) => {
  const { name, score } = req.body;
  const newEntry = `${name},${score}\n`;

  fs.appendFile(csvFilePath, newEntry, (err) => {
    if (err) {
      return res.status(500).send("Error writing to CSV file");
    }
    res.send("Score submitted successfully");
  });
});

// GET endpoint to return all scores and names
app.get("/get-scores", (req, res) => {
  fs.readFile(csvFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading CSV file");
    }
    res.type("text/plain").send(data);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

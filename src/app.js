const express = require('express');
const libstrings = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: `Hello, ${req.params.string}!` });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: libstrings.uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: libstrings.lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (isNaN(req.query.length)) {
    res.status(200).json({ result: libstrings.firstCharacter(req.params.string) });
  } else {
    res
      .status(200)
      .json({ result: libstrings.firstCharacters(req.params.string, req.query.length) });
  }
});

module.exports = app;

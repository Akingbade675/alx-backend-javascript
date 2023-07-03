const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const text = 'This is the list of our students\n';
  countStudents(process.argv[2]).then((data) => {
    res.send(`${text}${data}`);
  }).catch((err) => {
    res.status(404).send(`${text}${err.message}`);
  });
});

app.listen('1245');

module.exports = app;

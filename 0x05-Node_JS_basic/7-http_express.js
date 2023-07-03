const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((data) => {
    res.send('This is the list of our students\n' + data);
  }).catch(() => {
    res.staus(404).send('Cannot load the database');
  });
});

app.listen('1245');

module.exports = app;

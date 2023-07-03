const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(Error('Cannot load the database'));

      let output;

      // remove the header from the csv data
      let lines = data.split('\n').slice(1);

      // after splitting, if the file has '\n' at the end, remove it
      lines = lines.filter((value) => value !== '');

      const fields = {};
      for (const line of lines) {
        const data = line.split(',');
        const field = data[3];

        // e.g if 'CS' not a property in var *fields*,
        // create if before pushing data to it
        if (!(field in fields)) {
          fields[field] = [];
        }
        fields[field].push(data[0]);
      }

      output = `Number of students: ${lines.length}\n`;
      for (const [key, value] of Object.entries(fields)) {
        output += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
      }
      console.log(output.slice(0, -1));
      resolve(output.slice(0, -1));
    });
  });
}

module.exports = countStudents;

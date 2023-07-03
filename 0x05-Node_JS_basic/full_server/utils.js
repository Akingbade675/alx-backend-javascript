const fs = require('fs');

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
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

        resolve(fields);
      }
    });
  });
}

/* eslint-disable no-unused-vars */
import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((data) => {
      let output = 'This is the list of our students\n';
      const keys = (Object.keys(data)).sort();
      for (const key of keys) {
        output += `Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}\n`;
      }
      response.send(output.slice(0, -1));
    }).catch((err) => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2]).then((data) => {
      response.send(`List: ${data[major].join(', ')}`);
    }).catch((err) => {
      response.status(500).send('Cannot load the database');
    });
  }
}

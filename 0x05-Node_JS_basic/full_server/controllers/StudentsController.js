/* eslint-disable no-unused-vars */
import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase('database.csv').then((data) => {
      response.send(data);
    }).catch((err) => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' || major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase('database.csv').then((data) => {
      response.send(`List: ${data[major].join(', ')}`);
    }).catch((err) => {
      response.status(500).send('Cannot load the database');
    });
  }
}

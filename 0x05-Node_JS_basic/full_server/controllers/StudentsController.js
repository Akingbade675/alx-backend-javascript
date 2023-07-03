import { readDatabase } from '../utils'

export class StudentsController {

    static getAllStudents(request, response) {
        readDatabase('database.csv').then(data => {
            response.send(data)
        }).catch(err => {
            response.status(500).send('Cannot load the database')
        })
    }

    static getAllStudentsByMajor(request, response) {
        const major = request.params.major
        if (major !== 'CS' || major !== 'SWE') {
            response.status(500).send('Major parameter must be CS or SWE')
        }

        readDatabase('database.csv').then(data => {
            res.send(`List: ${data[major].join(', ')}`)
        }).catch(err => {
            res.status(500).send('Cannot load the database')
        })
    }
}

import { AppController } from '../controllers/AppController'
import { StudentsController } from '../controllers/StudentsController'
import express from 'express'

const app = express()

app.get('/', AppController.getHomepage)

app.get('/students', StudentsController.getAllStudents)

app.get('/students/:major', StudentsController.getAllStudentsByMajor)

export default app

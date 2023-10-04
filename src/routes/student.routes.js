const { Router } = require('express')
const { getAllStudents, getStudentsById, updateStudentsById, deleteStudentsById, addStudent } = require('../controllers/student.controllers')


const studentRouter = Router()

studentRouter.get('/', getAllStudents)
studentRouter.get('/:id', getStudentsById)
studentRouter.post('/', addStudent)
studentRouter.patch('/:id', updateStudentsById)
studentRouter.delete('/:id', deleteStudentsById)

module.exports = studentRouter
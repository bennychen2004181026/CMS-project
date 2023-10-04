const { Router } = require('express')
const { getAllStudents,
    getStudentsById,
    updateStudentsById,
    deleteStudentsById,
    addStudent,
    addStudentToCourse,
    removeStudentFromCourse } = require('../controllers/student.controllers')


const studentRouter = Router()

studentRouter.get('/', getAllStudents)
studentRouter.get('/:id', getStudentsById)
studentRouter.post('/', addStudent)
studentRouter.patch('/:id', updateStudentsById)
studentRouter.delete('/:id', deleteStudentsById)
studentRouter.post('/:studentId/courses/:courseId', addStudentToCourse)
studentRouter.delete('/:studentId/courses/:courseId', removeStudentFromCourse)

module.exports = studentRouter
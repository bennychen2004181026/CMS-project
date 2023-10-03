const Student = require("../models/student.model");

const addStudent = async (req, res) => {
  const { firstName, lastName, email } = req.body
  //data validation
  const student = new Student({ firstName, lastName, email })
  // const student = new Student(req.body) can cause issues
  // All the unnecessary attribures may by invited
  // try {
  await student.save();//this step really save the data into database
  res.json(student)
  // } catch (error) { }
};
const getAllStudents = async (req, res) => {
  //db.students.find()
  //Query chaining
  //Student.find().select('name age').sort('age');
  //Student.find() ->Query
  //Query.sort() =>Query
  //Builder pattern

  const students = await Student.find().exec();
  res.json(students);
};
const getStudentsById = (req, res) => { };
const updateStudentsById = (req, res) => { };
const deleteStudentsById = (req, res) => { };

module.exports = {
  addStudent,
  getAllStudents,
  getStudentsById,
  updateStudentsById,
  deleteStudentsById,
};

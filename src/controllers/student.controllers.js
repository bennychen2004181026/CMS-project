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
const getStudentsById = async (req, res) => {
  const { id } = req.params;
  // findById is a mongoose library method
  const student = await Student.findById(id).exec();
  if (!student) {
    res.status(404).json({ error: "Student not found" })
    return//ensure the following won't be executed
  }
  res.json(student)
};
const updateStudentsById = async (req, res) => { };
const deleteStudentsById = async (req, res) => { };

module.exports = {
  addStudent,
  getAllStudents,
  getStudentsById,
  updateStudentsById,
  deleteStudentsById,
};

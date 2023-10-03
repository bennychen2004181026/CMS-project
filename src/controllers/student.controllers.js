const Student = require("../models/student.model");

const addStudent = (req, res) => {};
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
const getStudentsById = (req, res) => {};
const updateStudentsById = (req, res) => {};
const deleteStudentsById = (req, res) => {};

module.exports = {
  addStudent,
  getAllStudents,
  getStudentsById,
  updateStudentsById,
  deleteStudentsById,
};

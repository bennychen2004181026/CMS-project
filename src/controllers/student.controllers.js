const Student = require("../models/student.model");
const Course = require("../models/course.model");

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
  // the .exec() method can ensure the return result is a promise
  // otherwise the returning object is a mongoose query object
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
const updateStudentsById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  //{new:true} is for returning the new studnet instance
  const student = await Student.findByIdAndUpdate(
    id,
    {
      firstName,
      lastName,
      email,
    },
    { new: true }
  ).exec();
  if (!student) {
    res.status(404).json({ error: "Student not found" })
    return
  }
  res.json(student)
};
const deleteStudentsById = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findByIdAndDelete(id).exec()
  if (!student) {
    res.status(404).json({ error: 'Student not found' });
    return;
  }
  res.sendStatus(204);
};

// POST /v1/students/:studentId/courses/:courseId
const addStudentToCourse = async (req, res) => {
  const { studentId, courseId } = req.params;

  // fetch student and course through both id
  const student = await Student.findById(studentId).exec();
  const course = await Course.findById(courseId).exec();
  // ensure the student and course are exist
  if (!student || !course) {
    res.status(404).json({ error: 'Student or course not found' });
    return;
  }
  /* The addToSet operator adds a value to an array only if the value does not already exist in the array. 
  Essentially, this ensures that only unique items will exist in an array field. The set is for elimiate duplication */
  // add studentId to course document
  course.students.addToSet(studentId);
  // add courseId to student document
  student.courses.addToSet(courseId);

  // save both
  await student.save();
  await course.save();

  res.json(student);
};

// DELETE /v1/students/:studentId/courses/:courseId
const removeStudentFromCourse = async (req, res) => {
  const { studentId, courseId } = req.params;

  // fetch student and course through both id
  const student = await Student.findById(studentId).exec();
  const course = await Course.findById(courseId).exec();
  // ensure the student and course are exist
  if (!student || !course) {
    res.status(404).json({ error: 'Student or course not found' });
    return;
  }
  student.courses.pull(courseId); // pull -> $pull
  course.students.pull(studentId);

  await student.save();
  await course.save();

  res.sendStatus(204);
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudentsById,
  updateStudentsById,
  deleteStudentsById,
  addStudentToCourse,
  removeStudentFromCourse
};

const { Schema, model } = require("mongoose");

studentSchema = new Schema({
  fisrtName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

const Student = model("Student", studentSchema);
// mongoose 会将名字Student 转换为小写并添加s

module.exports = Student;
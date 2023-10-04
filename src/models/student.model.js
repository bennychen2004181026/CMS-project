const { Schema, model } = require("mongoose");

studentSchema = new Schema({
  firstName: {
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
// mongoose transforms Student into lower case and turn it into plural


module.exports = Student;
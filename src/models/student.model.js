const { Schema, model } = require("mongoose");
const Joi = require('joi');

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
    //use mongoose default validate api to custom validation
    validate: [
      {
        validator: (email) => {
          // regex
          // validator package:Joi(recommanded), yup(recommanded), validator.js express-validator
          return Joi.string().email().validate(email).error === undefined;
        },
        // return false -> invalid -> return error msg
        msg: 'Invalid email format',
      },
    ]
  },
  courses: [
    {
      type: String,
      ref: "Course"
    }
  ]
});

const Student = model("Student", studentSchema);
// mongoose transforms Student into lower case and turn it into plural


module.exports = Student;
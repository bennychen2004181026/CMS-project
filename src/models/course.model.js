const { Schema, model } = require("mongoose");

module.exports = model('Course', new Schema({
    _id: {
        //create a virtual property that points to a real field in the schema
        //The main advantage is that you can refer to the field using a different
        //name without actually changing the underlying data in the database.
        alisa: "code",
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        default: "Course description"
    }
}))
const { Schema, model } = require("mongoose");

module.exports = model('Course', new Schema({
    _id: {
        //create a virtual property that points to a real field in the schema
        //The main advantage is that you can refer to the field using a different
        //name without actually changing the underlying data in the database.
        alias: "code",
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
    },
    //the relationship is many to many,if one, then it's student
    students: [
        {
            //ensure the type is objectId from mongoose.Schema
            type: Schema.Types.ObjectId,
            ref: "Student"
        },
    ],
},
    {
        timestamps: true,
        //If I want the alias field to be send in the response
        // then use the following API
        // toJSON: {
        //     virtuals: true
        // }
    }))
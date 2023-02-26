//create models
// to connect to the database use mongoose
const mongoose = require('mongoose');

// declare schema variable to store data
const schema = mongoose.Schema;

// properties of student
const studentSchema = new schema({
    name: {
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    indexNumber:{
        type:Number,
        required:true
    }

})

// Document,schema
const Student = mongoose.model("Student",studentSchema);

// export model
module.exports = Student;
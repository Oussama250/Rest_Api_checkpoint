const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// {Schema} = mongoose   --- the same as above.

const studentSchema = new Schema ({
    name : { type : String, required : true},
    age : Number
});

const student = mongoose.model("students", studentSchema);
module.exports = student;
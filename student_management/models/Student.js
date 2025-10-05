const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Student name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters long"]
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [1, "Age must be greater than 0"]
  },
  course: {
    type: String,
    required: [true, "Course is required"],
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);

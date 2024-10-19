const db = require("../models");
const Student = db.student;
const genericController = require('./genericController.js');
const studentController = genericController(Student);
module.exports = studentController;
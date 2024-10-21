const db = require("../models");
const Course = db.course;
const genericController = require('./genericController.js');
const courseController = genericController(Course);
module.exports = courseController;
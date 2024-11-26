const db = require("../models/index.js");
const ResumeCourse = db.resumeCourse;
const genericController = require('./genericController.js');
const ResumeCourseController = genericController(ResumeCourse, [], ['resumeId', 'educationId']);
module.exports = ResumeCourseController;


const db = require("../models");
const Resume = db.resume;
const genericController = require('./genericController.js');
const ResumeController = genericController(Resume, [], ['resumeReviewId', 'studentId']);
module.exports = ResumeController;
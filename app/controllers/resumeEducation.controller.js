
const db = require("../models");
const ResumeEducation = db.resumeEducation;
const genericController = require('./genericController.js');
const ResumeEducationController = genericController(ResumeEducation, [], ['resumeId', 'educationId']);
module.exports = ResumeEducationController;
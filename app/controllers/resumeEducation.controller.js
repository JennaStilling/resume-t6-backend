
const db = require("../models");
const ResumeEducation = db.resumeEducation;
const genericController = require('./genericController.js');
const ResumeEducationController = genericController(ResumeEducation);
module.exports = ResumeEducationController;
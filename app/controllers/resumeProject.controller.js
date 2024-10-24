
const db = require("../models");
const ResumeProject = db.resumeProject;
const genericController = require('./genericController.js');
const ResumeProjectController = genericController(ResumeProject);
module.exports = ResumeProjectController;

const db = require("../models");
const ResumeProject = db.resumeProject;
const genericController = require('./genericController.js');
const ResumeProjectController = genericController(ResumeProject, [], ['resumeId', 'projectId']);
module.exports = ResumeProjectController;
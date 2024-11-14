
const db = require("../models");
const ResumeExperience = db.resumeExperience;
const genericController = require('./genericController.js');
const ResumeExperienceController = genericController(ResumeExperience, [], ['resumeId', 'experienceId']);
module.exports = ResumeExperienceController;
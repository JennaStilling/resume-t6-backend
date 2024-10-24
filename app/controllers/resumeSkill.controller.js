
const db = require("../models");
const ResumeSkill = db.resumeSkill;
const genericController = require('./genericController.js');
const ResumeSkillController = genericController(ResumeSkill);
module.exports = ResumeSkillController;
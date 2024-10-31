
const db = require("../models");
const ResumeSkill = db.resumeSkill;
const genericController = require('./genericController.js');
const ResumeSkillController = genericController(ResumeSkill, [], ['resumeId', 'skillId']);
module.exports = ResumeSkillController;
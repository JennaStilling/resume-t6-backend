const db = require("../models");
const Skill = db.skill;
const genericController = require('./genericController.js');
const skillController = genericController(Skill, [], ['studentId']);
module.exports = skillController;
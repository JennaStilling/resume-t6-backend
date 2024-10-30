const db = require("../models");
const Experience = db.experience;
const genericController = require('./genericController.js');
const experienceController = genericController(Experience, [], ['studentId']);
module.exports = experienceController;
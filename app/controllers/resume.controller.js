
const db = require("../models");
const Resume = db.resume;
const genericController = require('./genericController.js');
const ResumeController = genericController(Resume);
module.exports = ResumeController;
const db = require("../models");
const Project = db.project;
const genericController = require('./genericController.js');
const projectController = genericController(Project, [], ['studentId']);
module.exports = projectController;
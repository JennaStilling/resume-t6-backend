const db = require("../models");
const Education = db.education;
const genericController = require('./genericController.js');
const educationController = genericController(Education);
module.exports = educationController;
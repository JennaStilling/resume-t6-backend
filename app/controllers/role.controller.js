const db = require("../models");
const Role = db.role;
const genericController = require('./genericController.js');
const roleController = genericController(Role);
module.exports = roleController;
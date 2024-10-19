
const db = require("../models");
const Admin = db.admin;
const genericController = require('./genericController.js');
const adminController = genericController(Admin);
module.exports = adminController;
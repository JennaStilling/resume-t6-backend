const db = require("../models");
const AdminRole = db.adminRole;
const genericController = require('./genericController.js');
const adminRoleController = genericController(AdminRole);
module.exports = adminRoleController;
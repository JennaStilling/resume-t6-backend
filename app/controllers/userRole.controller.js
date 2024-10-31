const db = require("../models");
const UserRole = db.userRole;
const genericController = require('./genericController.js');
const userRoleController = genericController(UserRole, [], ['roleId', 'userId']);
module.exports = userRoleController;


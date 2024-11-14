const db = require("../models");
const ReviewerRole = db.adminRole;
const genericController = require('./genericController.js');
const reviewerRoleController = genericController(ReviewerRole);
module.exports = reviewerRoleController;
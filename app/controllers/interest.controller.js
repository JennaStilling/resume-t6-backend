const db = require("../models");
const Interest = db.interest;
const genericController = require('./genericController');
const interestController = genericController(Interest);
module.exports = interestController;
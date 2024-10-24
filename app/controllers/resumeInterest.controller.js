
const db = require("../models");
const ResumeInterest = db.resumeInterest;
const genericController = require('./genericController.js');
const ResumeInterestController = genericController(ResumeInterest);
module.exports = ResumeInterestController;
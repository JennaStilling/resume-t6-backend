
const db = require("../models");
const ResumeReview = db.resumeReview;
const genericController = require('./genericController.js');
const ResumeReviewController = genericController(ResumeReview);
module.exports = ResumeReviewController;
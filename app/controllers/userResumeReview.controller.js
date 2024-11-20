const db = require("../models");
const UserResumeReview = db.userResumeReview;
const genericController = require('./genericController.js');
const userResumeReviewController = genericController(UserResumeReview, [], ['userId', 'resumeReviewId']);
module.exports = userResumeReviewController;
const db = require("../models");
const UserResumeReview = db.userResumeReview;
const genericController = require('./genericController.js');
const userResumeReviewController = genericController(UserResumeReview, [], ['userId', 'resumeReviewId']);

userResumeReviewController.getAllByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userResumeReviews = await UserResumeReview.findAll({ where: { userId } });
        res.status(200).json(userResumeReviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = userResumeReviewController;
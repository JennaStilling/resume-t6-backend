module.exports = (app) => {
    const userResumeReview = require("../controllers/userResumeReview.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/user/:userId/resumeReview/:resumeReviewId/userResumeReview/", [authenticate], userResumeReview.create);

    // Retrieve all Courses
    router.get("/user/:userId/resumeReview/:resumeReviewId/userResumeReview/", [authenticate], userResumeReview.getAll);

    // Retrieve all userResumeReviews by userId
    router.get("/user/:userId/userResumeReview/", [authenticate], userResumeReview.getAllByUserId);

    // Retreive a single Course with id
    router.get("/user/:userId/resumeReview/:resumeReviewId/userResumeReview/:id", [authenticate], userResumeReview.getById);

    // Update a Course with id
    router.put("/user/:userId/resumeReview/:resumeReviewId/userResumeReview/:id", [authenticate], userResumeReview.update);

    // Delete a course with id
    router.delete("/user/:userId/resumeReview/:resumeReviewId/userResumeReview/:id", [authenticate], userResumeReview.delete);

    // Delete all Courses
    router.delete("/user/:userId/resumeReview/:resumeReviewId/userResumeReview/", [authenticate], userResumeReview.deleteAll);

    app.use("/resume-t6", router);
};
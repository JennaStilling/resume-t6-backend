module.exports = (app) => {
    const userResumeReview = require("../controllers/userResumeReview.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], userResumeReview.create);

    // Retrieve all Courses
    router.get("/", [authenticate], userResumeReview.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], userResumeReview.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], userResumeReview.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], userResumeReview.delete);

    // Delete all Courses
    router.delete("/", [authenticate], userResumeReview.deleteAll);

    app.use("/resume-t6/user/:userId/resumeReview/:resumeReviewId/userResumeReview", router); // May need to change
};
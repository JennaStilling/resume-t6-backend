module.exports = (app) => {
    const resumeReview = require("../controllers/resumeReview.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/student/:studentId/resumeReview/", [authenticate], resumeReview.create);

    // Retrieve all Courses
    router.get("/student/:studentId/resumeReview/", [authenticate], resumeReview.getAll);

    // Retrieve a single Course with id
    router.get("/student/:studentId/resumeReview/:id", [authenticate], resumeReview.getById);

    // Retrieve a single ResumeReview by ID
    router.get("/resumeReview/:id", [authenticate], resumeReview.getById);

    // Update a Course with id
    router.put("/student/:studentId/resumeReview/:id", [authenticate], resumeReview.update);

    // Delete a course with id
    router.delete("/student/:studentId/resumeReview/:id", [authenticate], resumeReview.delete);

    // Delete all Courses
    router.delete("/student/:studentId/resumeReview/", [authenticate], resumeReview.deleteAll);

    app.use("/resume-t6", router);
};
module.exports = (app) => {
    const resumeReview = require("../controllers/resumeReview.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], resumeReview.create);

    // Retrieve all Courses
    router.get("/", [authenticate], resumeReview.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], resumeReview.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], resumeReview.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], resumeReview.delete);

    // Delete all Courses
    router.delete("/", [authenticate], resumeReview.deleteAll);

    app.use("/resume-t6/student/:studentId/resumeReview", router);
};
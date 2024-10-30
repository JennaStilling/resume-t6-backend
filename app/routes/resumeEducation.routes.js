module.exports = (app) => {
    const resumeEducation = require("../controllers/resumeEducation.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], resumeEducation.create);

    // Retrieve all Courses
    router.get("/", [authenticate], resumeEducation.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], resumeEducation.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], resumeEducation.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], resumeEducation.delete);

    // Delete all Courses
    router.delete("/", [authenticate], resumeEducation.deleteAll);

    app.use("/resume-t6/resume/:resumeId/education/:educationId/resumeEducation", router);
};
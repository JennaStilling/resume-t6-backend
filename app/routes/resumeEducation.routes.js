module.exports = (app) => {
    const resumeEducation = require("../controllers/resumeEducation.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    router.get("/resume/:resumeId/resumeEducation/", [authenticate], resumeEducation.getAll);

    // Create new Course
    router.post("/resume/:resumeId/education/:educationId/resumeEducation/", [authenticate], resumeEducation.create);

    // Retrieve all Courses
    router.get("/resume/:resumeId/education/:educationId/resumeEducation/", [authenticate], resumeEducation.getAll);

    // Retreive a single Course with id
    router.get("/resume/:resumeId/education/:educationId/resumeEducation/:id", [authenticate], resumeEducation.getById);

    // Update a Course with id
    router.put("/resume/:resumeId/education/:educationId/resumeEducation/:id", [authenticate], resumeEducation.update);

    // Delete a course with id
    router.delete("/resume/:resumeId/education/:educationId/resumeEducation/:id", [authenticate], resumeEducation.delete);

    // Delete all Courses
    router.delete("/resume/:resumeId/resumeEducation/", [authenticate], resumeEducation.deleteAll);

    app.use("/resume-t6", router);
};
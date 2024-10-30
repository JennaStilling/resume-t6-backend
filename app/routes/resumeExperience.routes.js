module.exports = (app) => {
    const resumeExperience = require("../controllers/resumeExperience.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], resumeExperience.create);

    // Retrieve all Courses
    router.get("/", [authenticate], resumeExperience.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], resumeExperience.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], resumeExperience.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], resumeExperience.delete);

    // Delete all Courses
    router.delete("/", [authenticate], resumeExperience.deleteAll);

    app.use("/resume-t6/resume/:resumeId/experience/:experienceId/resumeExperience", router);
};
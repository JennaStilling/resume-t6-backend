module.exports = (app) => {
    const resumeExperience = require("../controllers/resumeExperience.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    router.get("/resume/:resumeId/resumeExperience/", [authenticate], resumeExperience.getAll);

    // Create new Course
    router.post("/resume/:resumeId/experience/:experienceId/resumeExperience/", [authenticate], resumeExperience.create);

    // Retrieve all Courses
    router.get("/resume/:resumeId/experience/:experienceId/resumeExperience/", [authenticate], resumeExperience.getAll);

    // Retreive a single Course with id
    router.get("/resume/:resumeId/experience/:experienceId/resumeExperience/:id", [authenticate], resumeExperience.getById);

    // Update a Course with id
    router.put("/resume/:resumeId/experience/:experienceId/resumeExperience/:id", [authenticate], resumeExperience.update);

    // Delete a course with id
    router.delete("/resume/:resumeId/experience/:experienceId/resumeExperience/:id", [authenticate], resumeExperience.delete);

    // Delete all Courses
    router.delete("/resume/:resumeId/experience/:experienceId/resumeExperience/", [authenticate], resumeExperience.deleteAll);

    app.use("/resume-t6", router);
};
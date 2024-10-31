module.exports = (app) => {
    const resumeProject = require("../controllers/resumeProject.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], resumeProject.create);

    // Retrieve all Courses
    router.get("/", [authenticate], resumeProject.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], resumeProject.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], resumeProject.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], resumeProject.delete);

    // Delete all Courses
    router.delete("/", [authenticate], resumeProject.deleteAll);

    app.use("/resume-t6/resume/:resumeId/project/:projectId/resumeProject", router);
};
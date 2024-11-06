module.exports = (app) => {
    const resumeProject = require("../controllers/resumeProject.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/resume/:resumeId/project/:projectId/resumeProject/", [authenticate], resumeProject.create);

    // Retrieve all Courses
    router.get("/resume/:resumeId/project/:projectId/resumeProject/", [authenticate], resumeProject.getAll);

    // Retreive a single Course with id
    router.get("/resume/:resumeId/project/:projectId/resumeProject/:id", [authenticate], resumeProject.getById);

    // Update a Course with id
    router.put("/resume/:resumeId/project/:projectId/resumeProject/:id", [authenticate], resumeProject.update);

    // Delete a course with id
    router.delete("/resume/:resumeId/project/:projectId/resumeProject/:id", [authenticate], resumeProject.delete);

    // Delete all Courses
    router.delete("/resume/:resumeId/project/:projectId/resumeProject/", [authenticate], resumeProject.deleteAll);

    app.use("/resume-t6", router);
};
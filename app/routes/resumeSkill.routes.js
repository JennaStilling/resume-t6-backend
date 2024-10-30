module.exports = (app) => {
    const resumeSkill = require("../controllers/resumeSkill.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], resumeSkill.create);

    // Retrieve all Courses
    router.get("/", [authenticate], resumeSkill.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], resumeSkill.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], resumeSkill.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], resumeSkill.delete);

    // Delete all Courses
    router.delete("/", [authenticate], resumeSkill.deleteAll);

    app.use("/resume-t6/resume/:resumeId/skill/:skillId/resumeSkill", router);
};
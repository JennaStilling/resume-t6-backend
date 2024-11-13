module.exports = (app) => {
    const resumeSkill = require("../controllers/resumeSkill.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    router.get("/resume/:resumeId/resumeSkill/", [authenticate], resumeSkill.getAll);

    // Create new Course
    router.post("/resume/:resumeId/skill/:skillId/resumeSkill/", [authenticate], resumeSkill.create);

    // Retrieve all Courses
    router.get("/resume/:resumeId/skill/:skillId/resumeSkill/", [authenticate], resumeSkill.getAll);

    // Retreive a single Course with id
    router.get("/resume/:resumeId/skill/:skillId/resumeSkill/:id", [authenticate], resumeSkill.getById);

    // Update a Course with id
    router.put("/resume/:resumeId/skill/:skillId/resumeSkill/:id", [authenticate], resumeSkill.update);

    // Delete a course with id
    router.delete("/resume/:resumeId/skill/:skillId/resumeSkill/:id", [authenticate], resumeSkill.delete);

    // Delete all Courses
    router.delete("/resume/:resumeId/skill/:skillId/resumeSkill/", [authenticate], resumeSkill.deleteAll);

    app.use("/resume-t6", router);
};
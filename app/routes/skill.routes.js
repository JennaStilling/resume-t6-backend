module.exports = (app) => {
    const skill = require("../controllers/skill.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/student/:studentId/skill/", [authenticate], skill.create);

    // Retrieve all Courses
    router.get("/student/:studentId/skill/", [authenticate], skill.getAll);

    // Retreive a single Course with id
    router.get("/student/:studentId/skill/:id", [authenticate], skill.getById);

    // Update a Course with id
    router.put("/student/:studentId/skill/:id", [authenticate], skill.update);

    // Delete a course with id
    router.delete("/student/:studentId/skill/:id", [authenticate], skill.delete);

    // Delete all Courses
    router.delete("/student/:studentId/skill/", [authenticate], skill.deleteAll);

    app.use("/resume-t6", router);
};
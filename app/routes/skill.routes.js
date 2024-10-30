module.exports = (app) => {
    const skill = require("../controllers/skill.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], skill.create);

    // Retrieve all Courses
    router.get("/", [authenticate], skill.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], skill.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], skill.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], skill.delete);

    // Delete all Courses
    router.delete("/", [authenticate], skill.deleteAll);

    app.use("/resume-t6/student/:studentId/skill", router);
};
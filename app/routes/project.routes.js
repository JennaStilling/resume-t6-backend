module.exports = (app) => {
    const project = require("../controllers/project.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], project.create);

    // Retrieve all Courses
    router.get("/", [authenticate], project.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], project.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], project.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], project.delete);

    // Delete all Courses
    router.delete("/", [authenticate], project.deleteAll);

    app.use("/resume-t6/student/:studentId/project", router);
};
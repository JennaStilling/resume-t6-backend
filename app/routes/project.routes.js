module.exports = (app) => {
    const project = require("../controllers/project.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/student/:studentId/project/", [authenticate], project.create);

    // Retrieve all Courses
    router.get("/student/:studentId/project/", [authenticate], project.getAll);

    // Retreive a single Course with id
    router.get("/student/:studentId/project/:id", [authenticate], project.getById);

    // Update a Course with id
    router.put("/student/:studentId/project/:id", [authenticate], project.update);

    // Delete a course with id
    router.delete("/student/:studentId/project/:id", [authenticate], project.delete);

    // Delete all Courses
    router.delete("/student/:studentId/project/", [authenticate], project.deleteAll);

    app.use("/resume-t6", router);
};
module.exports = (app) => {
    const course = require("../controllers/course.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], course.create);

    // Retrieve all Courses
    router.get("/", [authenticate], course.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], course.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], course.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], course.delete);

    // Delete all Courses
    router.delete("/", [authenticate], course.deleteAll);

    app.use("/resume-t6/student/:studentId/education/:educationId/course", router);
};
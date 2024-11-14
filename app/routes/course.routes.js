module.exports = (app) => {
    const course = require("../controllers/course.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/student/:studentId/education/:educationId/course/", [authenticate], course.create);

    // Retrieve all Courses
    router.get("/student/:studentId/education/:educationId/course/", [authenticate], course.getAll);

    // Retreive a single Course with id
    router.get("/student/:studentId/education/:educationId/course/:id", [authenticate], course.getById);

    // Update a Course with id
    router.put("/student/:studentId/education/:educationId/course/:id", [authenticate], course.update);

    // Delete a course with id
    router.delete("/student/:studentId/education/:educationId/course/:id", [authenticate], course.delete);

    // Delete all Courses
    router.delete("/student/:studentId/education/:educationId/course/", [authenticate], course.deleteAll);

    app.use("/resume-t6", router);
};
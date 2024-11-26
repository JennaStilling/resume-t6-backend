// resumeCourse.routes.js
module.exports = (app) => {
    const resumeCourse = require("../controllers/resumeCourse.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/resume/:resumeId/education/:educationId/resumeCourse/", [authenticate], resumeCourse.create);

    // Retrieve all Courses
    router.get("/resume/:resumeId/education/:educationId/resumeCourse/", [authenticate], resumeCourse.getAll);

    // Retrieve a single Course with id
    router.get("/resume/:resumeId/education/:educationId/resumeCourse/:id", [authenticate], resumeCourse.getById);

    // Update a Course with id
    router.put("/resume/:resumeId/education/:educationId/resumeCourse/:id", [authenticate], resumeCourse.update);

    // Delete a course with id
    router.delete("/resume/:resumeId/education/:educationId/resumeCourse/:id", [authenticate], resumeCourse.delete);

    // Delete all Courses
    router.delete("/resume/:resumeId/education/:educationId/resumeCourse/", [authenticate], resumeCourse.deleteAll);

    app.use("/resume-t6", router);
};

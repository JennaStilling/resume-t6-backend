module.exports = (app) => {
    const education = require("../controllers/education.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/student/:studentId/education/", [authenticate], education.create);

    // Retrieve all Courses
    router.get("/student/:studentId/education/", [authenticate], education.getAll);

    // Retreive a single Course with id
    router.get("/student/:studentId/education/:id", [authenticate], education.getById);

    // Update a Course with id
    router.put("/student/:studentId/education/:id", [authenticate], education.update);

    // Delete a course with id
    router.delete("/student/:studentId/education/:id", [authenticate], education.delete);

    // Delete all Courses
    router.delete("/student/:studentId/education/", [authenticate], education.deleteAll);

    app.use("/resume-t6", router);
};
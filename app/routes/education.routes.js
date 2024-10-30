module.exports = (app) => {
    const education = require("../controllers/education.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], education.create);

    // Retrieve all Courses
    router.get("/", [authenticate], education.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], education.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], education.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], education.delete);

    // Delete all Courses
    router.delete("/", [authenticate], education.deleteAll);

    app.use("/resume-t6/student/:studentId/education", router);
};
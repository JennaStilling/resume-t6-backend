module.exports = (app) => {
    const certification = require("../controllers/certification.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], certification.create);

    // Retrieve all Courses
    router.get("/", [authenticate], certification.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], certification.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], certification.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], certification.delete);

    // Delete all Courses
    router.delete("/", [authenticate], certification.deleteAll);

    app.use("/resume-t6/student/:studentId/certification", router);
};
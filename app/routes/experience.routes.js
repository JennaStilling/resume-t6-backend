module.exports = (app) => {
    const experience = require("../controllers/experience.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], experience.create);

    // Retrieve all Courses
    router.get("/", [authenticate], experience.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], experience.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], experience.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], experience.delete);

    // Delete all Courses
    router.delete("/", [authenticate], experience.deleteAll);

    app.use("/resume-t6/student/:studentId/experience", router);
};
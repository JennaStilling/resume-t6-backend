module.exports = (app) => {
    const experience = require("../controllers/experience.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/student/:studentId/experience/", [authenticate], experience.create);

    // Retrieve all Courses
    router.get("/student/:studentId/experience/", [authenticate], experience.getAll);

    // Retreive a single Course with id
    router.get("/student/:studentId/experience/:id", [authenticate], experience.getById);

    // Update a Course with id
    router.put("/student/:studentId/experience/:id", [authenticate], experience.update);

    // Delete a course with id
    router.delete("/student/:studentId/experience/:id", [authenticate], experience.delete);

    // Delete all Courses
    router.delete("/student/:studentId/experience/", [authenticate], experience.deleteAll);

    app.use("/resume-t6", router);
};
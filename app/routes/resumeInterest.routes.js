module.exports = (app) => {
    const resumeInterest = require("../controllers/resumeInterest.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], resumeInterest.create);

    // Retrieve all Courses
    router.get("/", [authenticate], resumeInterest.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], resumeInterest.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], resumeInterest.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], resumeInterest.delete);

    // Delete all Courses
    router.delete("/", [authenticate], resumeInterest.deleteAll);

    app.use("/resume-t6/resume/:resumeId/interest/:interestId/resumeInterest", router);
};
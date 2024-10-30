module.exports = (app) => {
    const resumeLink = require("../controllers/resumeLink.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], resumeLink.create);

    // Retrieve all Courses
    router.get("/", [authenticate], resumeLink.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], resumeLink.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], resumeLink.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], resumeLink.delete);

    // Delete all Courses
    router.delete("/", [authenticate], resumeLink.deleteAll);

    app.use("/resume-t6/resume/:resumeId/link/:linkId/resumeLink", router);
};
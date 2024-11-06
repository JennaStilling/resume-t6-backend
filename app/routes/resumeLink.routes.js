module.exports = (app) => {
    const resumeLink = require("../controllers/resumeLink.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/resume/:resumeId/link/:linkId/resumeLink/", [authenticate], resumeLink.create);

    // Retrieve all Courses
    router.get("/resume/:resumeId/link/:linkId/resumeLink/", [authenticate], resumeLink.getAll);

    // Retreive a single Course with id
    router.get("/resume/:resumeId/link/:linkId/resumeLink/:id", [authenticate], resumeLink.getById);

    // Update a Course with id
    router.put("/resume/:resumeId/link/:linkId/resumeLink/:id", [authenticate], resumeLink.update);

    // Delete a course with id
    router.delete("/resume/:resumeId/link/:linkId/resumeLink/:id", [authenticate], resumeLink.delete);

    // Delete all Courses
    router.delete("/resume/:resumeId/link/:linkId/resumeLink/", [authenticate], resumeLink.deleteAll);

    app.use("/resume-t6", router);
};
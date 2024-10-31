module.exports = (app) => {
    const resumeCertification = require("../controllers/resumeCertification.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], resumeCertification.create);

    // Retrieve all Courses
    router.get("/", [authenticate], resumeCertification.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], resumeCertification.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], resumeCertification.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], resumeCertification.delete);

    // Delete all Courses
    router.delete("/", [authenticate], resumeCertification.deleteAll);

    app.use("/resume-t6/resume/:resumeId/certification/:certificationId/resumeCertification", router);
};
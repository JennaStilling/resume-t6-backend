module.exports = (app) => {
    const resumeInterest = require("../controllers/resumeInterest.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/resume/:resumeId/interest/:interestId/resumeInterest/", [authenticate], resumeInterest.create);

    // Retrieve all Courses
    router.get("/resume/:resumeId/interest/:interestId/resumeInterest/", [authenticate], resumeInterest.getAll);

    // Retreive a single Course with id
    router.get("/resume/:resumeId/interest/:interestId/resumeInterest/:id", [authenticate], resumeInterest.getById);

    // Update a Course with id
    router.put("/resume/:resumeId/interest/:interestId/resumeInterest/:id", [authenticate], resumeInterest.update);

    // Delete a course with id
    router.delete("/resume/:resumeId/interest/:interestId/resumeInterest/:id", [authenticate], resumeInterest.delete);

    // Delete all Courses
    router.delete("/resume/:resumeId/interest/:interestId/resumeInterest/", [authenticate], resumeInterest.deleteAll);

    app.use("/resume-t6", router);
};
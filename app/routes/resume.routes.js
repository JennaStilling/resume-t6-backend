module.exports = (app) => {
    const resume = require("../controllers/resume.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // REST Requests as a student
    // Create new Resume For a student
    router.post("/student/:studentId/resume/", [authenticate], resume.create);

    // Retrieve all Resumes for student
    router.get("/student/:studentId/resume/", [authenticate], resume.getAll);

    // Retreive a single Resume with id
    router.get("/student/:studentId/resume/:id", [authenticate], resume.getById);

    // Update a Resume with id
    router.put("/student/:studentId/resume/:id", [authenticate], resume.update);

    // Delete a Resume with id
    router.delete("/student/:studentId/resume/:id", [authenticate], resume.delete);

    // Delete all Resumes for a student
    router.delete("/student/:studentId/resume/", [authenticate], resume.deleteAll);

    // REST Requests as a reviewer
    // Get the Resume as the reviewer. The Reviewer should only be able to read the resume and nothing else. The suggestions are don in ResumeReview
    router.get("/resumeReview/:resumeReviewId/resume/:id", [authenticate], resume.getById);

    router.get("/resumeReview/:resumeReviewId/resume", [authenticate], resume.getAll);

    app.use("/resume-t6", router);
};
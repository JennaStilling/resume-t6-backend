module.exports = (app) => {
    const resumeReview = require("../controllers/resumeReview.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", resumeReview.create);

    // Retrieve all Courses
    router.get("/", resumeReview.getAll);

    // Retreive a single Course with id
    router.get("/:id", resumeReview.getById);

    // Update a Course with id
    router.put("/:id", resumeReview.update);

    // Delete a course with id
    router.delete("/:id", resumeReview.delete);

    // Delete all Courses
    router.delete("/", resumeReview.deleteAll);

    app.use("/course-t6/resumeReview", router);
};
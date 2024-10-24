module.exports = (app) => {
    const resumeEducation = require("../controllers/resumeEducation.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", resumeEducation.create);

    // Retrieve all Courses
    router.get("/", resumeEducation.getAll);

    // Retreive a single Course with id
    router.get("/:id", resumeEducation.getById);

    // Update a Course with id
    router.put("/:id", resumeEducation.update);

    // Delete a course with id
    router.delete("/:id", resumeEducation.delete);

    // Delete all Courses
    router.delete("/", resumeEducation.deleteAll);

    app.use("/course-t6/resumeEducation", router);
};
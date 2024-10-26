module.exports = (app) => {
    const resumeInterest = require("../controllers/resumeInterest.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", resumeInterest.create);

    // Retrieve all Courses
    router.get("/", resumeInterest.getAll);

    // Retreive a single Course with id
    router.get("/:id", resumeInterest.getById);

    // Update a Course with id
    router.put("/:id", resumeInterest.update);

    // Delete a course with id
    router.delete("/:id", resumeInterest.delete);

    // Delete all Courses
    router.delete("/", resumeInterest.deleteAll);

    app.use("/course-t6/resumeInterest", router);
};
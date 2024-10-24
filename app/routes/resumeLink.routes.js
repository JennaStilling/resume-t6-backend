module.exports = (app) => {
    const resumeLink = require("../controllers/resumeLink.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", resumeLink.create);

    // Retrieve all Courses
    router.get("/", resumeLink.getAll);

    // Retreive a single Course with id
    router.get("/:id", resumeLink.getById);

    // Update a Course with id
    router.put("/:id", resumeLink.update);

    // Delete a course with id
    router.delete("/:id", resumeLink.delete);

    // Delete all Courses
    router.delete("/", resumeLink.deleteAll);

    app.use("/course-t6/resumeLink", router);
};
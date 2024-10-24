module.exports = (app) => {
    const resumeProject = require("../controllers/resumeProject.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", resumeProject.create);

    // Retrieve all Courses
    router.get("/", resumeProject.getAll);

    // Retreive a single Course with id
    router.get("/:id", resumeProject.getById);

    // Update a Course with id
    router.put("/:id", resumeProject.update);

    // Delete a course with id
    router.delete("/:id", resumeProject.delete);

    // Delete all Courses
    router.delete("/", resumeProject.deleteAll);

    //TODO - need to ask about this
    app.use("/course-t6/admin", router);
};
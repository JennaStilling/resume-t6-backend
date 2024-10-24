module.exports = (app) => {
    const resumeExperience = require("../controllers/resumeExperience.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", resumeExperience.create);

    // Retrieve all Courses
    router.get("/", resumeExperience.getAll);

    // Retreive a single Course with id
    router.get("/:id", resumeExperience.getById);

    // Update a Course with id
    router.put("/:id", resumeExperience.update);

    // Delete a course with id
    router.delete("/:id", resumeExperience.delete);

    // Delete all Courses
    router.delete("/", resumeExperience.deleteAll);

    //TODO - need to ask about this
    app.use("/course-t6/admin", router);
};
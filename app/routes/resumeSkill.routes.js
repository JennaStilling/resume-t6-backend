module.exports = (app) => {
    const resumeSkill = require("../controllers/resumeSkill.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", resumeSkill.create);

    // Retrieve all Courses
    router.get("/", resumeSkill.getAll);

    // Retreive a single Course with id
    router.get("/:id", resumeSkill.getById);

    // Update a Course with id
    router.put("/:id", resumeSkill.update);

    // Delete a course with id
    router.delete("/:id", resumeSkill.delete);

    // Delete all Courses
    router.delete("/", resumeSkill.deleteAll);

    app.use("/course-t6/resumeSkill", router);
};
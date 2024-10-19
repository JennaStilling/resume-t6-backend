module.exports = (app) => {
    const skill = require("../controllers/skill.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", skill.create);

    // Retrieve all Courses
    router.get("/", skill.getAll);

    // Retreive a single Course with id
    router.get("/:id", skill.getById);

    // Update a Course with id
    router.put("/:id", skill.update);

    // Delete a course with id
    router.delete("/:id", skill.delete);

    // Delete all Courses
    router.delete("/", skill.deleteAll);

    app.use("/course-t6/skill", router);
};
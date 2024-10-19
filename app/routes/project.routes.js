module.exports = (app) => {
    const project = require("../controllers/project.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", project.create);

    // Retrieve all Courses
    router.get("/", project.getAll);

    // Retreive a single Course with id
    router.get("/:id", project.getById);

    // Update a Course with id
    router.put("/:id", project.update);

    // Delete a course with id
    router.delete("/:id", project.delete);

    // Delete all Courses
    router.delete("/", project.deleteAll);

    app.use("/course-t6/project", router);
};
module.exports = (app) => {
    const experience = require("../controllers/experience.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", experience.create);

    // Retrieve all Courses
    router.get("/", experience.getAll);

    // Retreive a single Course with id
    router.get("/:id", experience.getById);

    // Update a Course with id
    router.put("/:id", experience.update);

    // Delete a course with id
    router.delete("/:id", experience.delete);

    // Delete all Courses
    router.delete("/", experience.deleteAll);

    app.use("/course-t6/experience", router);
};
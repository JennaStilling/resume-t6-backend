module.exports = (app) => {
    const education = require("../controllers/education.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", education.create);

    // Retrieve all Courses
    router.get("/", education.getAll);

    // Retreive a single Course with id
    router.get("/:id", education.getById);

    // Update a Course with id
    router.put("/:id", education.update);

    // Delete a course with id
    router.delete("/:id", education.delete);

    // Delete all Courses
    router.delete("/", education.deleteAll);

    app.use("/course-t6/education", router);
};
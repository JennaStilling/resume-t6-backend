module.exports = (app) => {
    const interest = require("../controllers/interest.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", interest.create);

    // Retrieve all Courses
    router.get("/", interest.getAll);

    // Retreive a single Course with id
    router.get("/:id", interest.getById);

    // Update a Course with id
    router.put("/:id", interest.update);

    // Delete a course with id
    router.delete("/:id", interest.delete);

    // Delete all Courses
    router.delete("/", interest.deleteAll);

    app.use("/course-t6/interest", router);
};
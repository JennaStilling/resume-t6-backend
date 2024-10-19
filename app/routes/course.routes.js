module.exports = (app) => {
    const course = require("../controllers/course.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", course.create);

    // Retrieve all Courses
    router.get("/", course.getAll);

    // Retreive a single Course with id
    router.get("/:id", course.getById);

    // Update a Course with id
    router.put("/:id", course.update);

    // Delete a course with id
    router.delete("/:id", course.delete);

    // Delete all Courses
    router.delete("/", course.deleteAll);

    app.use("/course-t6/course", router);
};
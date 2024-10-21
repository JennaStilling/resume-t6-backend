module.exports = (app) => {
    const student = require("../controllers/student.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", student.create);

    // Retrieve all Courses
    router.get("/", student.getAll);

    // Retreive a single Course with id
    router.get("/:id", student.getById);

    // Update a Course with id
    router.put("/:id", student.update);

    // Delete a course with id
    router.delete("/:id", student.delete);

    // Delete all Courses
    router.delete("/", student.deleteAll);

    app.use("/course-t6/student", router);
};
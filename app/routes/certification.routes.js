module.exports = (app) => {
    const certification = require("../controllers/certification.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", certification.create);

    // Retrieve all Courses
    router.get("/", certification.getAll);

    // Retreive a single Course with id
    router.get("/:id", certification.getById);

    // Update a Course with id
    router.put("/:id", certification.update);

    // Delete a course with id
    router.delete("/:id", certification.delete);

    // Delete all Courses
    router.delete("/", certification.deleteAll);

    app.use("/course-t6/certification", router);
};
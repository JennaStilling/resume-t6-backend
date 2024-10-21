module.exports = (app) => {
    const link = require("../controllers/link.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", link.create);

    // Retrieve all Courses
    router.get("/", link.getAll);

    // Retreive a single Course with id
    router.get("/:id", link.getById);

    // Update a Course with id
    router.put("/:id", link.update);

    // Delete a course with id
    router.delete("/:id", link.delete);

    // Delete all Courses
    router.delete("/", link.deleteAll);

    app.use("/course-t6/link", router);
};
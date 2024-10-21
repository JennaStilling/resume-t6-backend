module.exports = (app) => {
    const admin = require("../controllers/admin.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", admin.create);

    // Retrieve all Courses
    router.get("/", admin.getAll);

    // Retreive a single Course with id
    router.get("/:id", admin.getById);

    // Update a Course with id
    router.put("/:id", admin.update);

    // Delete a course with id
    router.delete("/:id", admin.delete);

    // Delete all Courses
    router.delete("/", admin.deleteAll);

    app.use("/course-t6/admin", router);
};
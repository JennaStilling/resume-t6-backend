module.exports = (app) => {
    const resume = require("../controllers/resume.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", resume.create);

    // Retrieve all Courses
    router.get("/", resume.getAll);

    // Retreive a single Course with id
    router.get("/:id", resume.getById);

    // Update a Course with id
    router.put("/:id", resume.update);

    // Delete a course with id
    router.delete("/:id", resume.delete);

    // Delete all Courses
    router.delete("/", resume.deleteAll);

    //TODO - need to ask about this
    app.use("/course-t6/admin", router);
};
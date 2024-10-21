module.exports = (app) => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", user.create);

    // Retrieve all Courses
    router.get("/", user.getAll);

    // Retreive a single Course with id
    router.get("/:id", user.getById);

    // Retreive Course(s) with Department
    router.get("/email/:email", user.getByEmail);

    // Update a Course with id
    router.put("/:id", user.update);

    // Delete a course with id
    router.delete("/:id", user.delete);

    // Delete all Courses
    router.delete("/", user.deleteAll);

    app.use("/course-t6/user", router);
};
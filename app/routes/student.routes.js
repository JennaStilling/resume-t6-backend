module.exports = (app) => {
    const student = require("../controllers/student.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], student.create);

    // Retrieve all Courses
    router.get("/", [authenticate], student.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], student.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], student.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], student.delete);

    // Delete all Courses
    router.delete("/", [authenticate], student.deleteAll);

    app.use("/resume-t6/student", router);
};
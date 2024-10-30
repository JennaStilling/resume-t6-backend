module.exports = (app) => {
    const interest = require("../controllers/interest.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], interest.create);

    // Retrieve all Courses
    router.get("/", [authenticate], interest.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], interest.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], interest.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], interest.delete);

    // Delete all Courses
    router.delete("/", [authenticate], interest.deleteAll);

    app.use("/resume-t6/student/:studentId/interest", router);
};
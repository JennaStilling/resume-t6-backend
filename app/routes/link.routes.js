module.exports = (app) => {
    const link = require("../controllers/link.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], link.create);

    // Retrieve all Courses
    router.get("/", [authenticate], link.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], link.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], link.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], link.delete);

    // Delete all Courses
    router.delete("/", [authenticate], link.deleteAll);

    app.use("/resume-t6/student/:studentId/link", router);
};
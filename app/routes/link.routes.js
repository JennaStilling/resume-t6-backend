module.exports = (app) => {
    const link = require("../controllers/link.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/student/:studentId/link/", [authenticate], link.create);

    // Retrieve all Courses
    router.get("/student/:studentId/link/", [authenticate], link.getAll);

    // Retreive a single Course with id
    router.get("/student/:studentId/link/:id", [authenticate], link.getById);

    // Update a Course with id
    router.put("/student/:studentId/link/:id", [authenticate], link.update);

    // Delete a course with id
    router.delete("/student/:studentId/link/:id", [authenticate], link.delete);

    // Delete all Courses
    router.delete("/student/:studentId/link/", [authenticate], link.deleteAll);

    app.use("/resume-t6", router);
};
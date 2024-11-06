module.exports = (app) => {
    const interest = require("../controllers/interest.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/student/:studentId/interest/", [authenticate], interest.create);

    // Retrieve all Courses
    router.get("/student/:studentId/interest/", [authenticate], interest.getAll);

    // Retreive a single Course with id
    router.get("/student/:studentId/interest/:id", [authenticate], interest.getById);

    // Update a Course with id
    router.put("/student/:studentId/interest/:id", [authenticate], interest.update);

    // Delete a course with id
    router.delete("/student/:studentId/interest/:id", [authenticate], interest.delete);

    // Delete all Courses
    router.delete("/student/:studentId/interest/", [authenticate], interest.deleteAll);

    app.use("/resume-t6", router);
};
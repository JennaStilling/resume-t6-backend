module.exports = (app) => {
    const certification = require("../controllers/certification.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/student/:studentId/certification/", [authenticate], certification.create);

    // Retrieve all Courses
    router.get("/student/:studentId/certification/", [authenticate], certification.getAll);

    // Retreive a single Course with id
    router.get("/student/:studentId/certification/:id", [authenticate], certification.getById);

    // Update a Course with id
    router.put("/student/:studentId/certification/:id", [authenticate], certification.update);

    // Delete a course with id
    router.delete("/student/:studentId/certification/:id", [authenticate], certification.delete);

    // Delete all Courses
    router.delete("/student/:studentId/certification/", [authenticate], certification.deleteAll);

    app.use("/resume-t6", router);
};
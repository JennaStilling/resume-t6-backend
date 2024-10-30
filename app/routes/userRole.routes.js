module.exports = (app) => {
    const userRole = require("../controllers/userRole.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], userRole.create);

    // Retrieve all Courses
    router.get("/", [authenticate], userRole.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], userRole.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], userRole.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], userRole.delete);

    // Delete all Courses
    router.delete("/", [authenticate], userRole.deleteAll);

    app.use("/resume-t6/user/:userId/role/:roleId/userRole", router);
};
module.exports = (app) => {
    const userRole = require("../controllers/userRole.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/user/:userId/role/:roleId/userRole/", [authenticate], userRole.create);

    // Retrieve all Courses
    router.get("/user/:userId/role/:roleId/userRole/", [authenticate], userRole.getAll);

    // Retreive a single Course with id
    router.get("/user/:userId/role/:roleId/userRole/:id", [authenticate], userRole.getById);

    // Update a Course with id
    router.put("/user/:userId/role/:roleId/userRole/:id", [authenticate], userRole.update);

    // Delete a course with id
    router.delete("/user/:userId/role/:roleId/userRole/:id", [authenticate], userRole.delete);

    // Delete all Courses
    router.delete("/user/:userId/role/:roleId/userRole/", [authenticate], userRole.deleteAll);

    app.use("/resume-t6", router);
};
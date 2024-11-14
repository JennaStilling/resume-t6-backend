module.exports = (app) => {
    const role = require("../controllers/role.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", [authenticate], role.create);

    // Retrieve all Courses
    router.get("/", [authenticate], role.getAll);

    // Retreive a single Course with id
    router.get("/:id", [authenticate], role.getById);

    // Update a Course with id
    router.put("/:id", [authenticate], role.update);

    // Delete a course with id
    router.delete("/:id", [authenticate], role.delete);

    // Delete all Courses
    router.delete("/", [authenticate], role.deleteAll);

    app.use("/resume-t6/role", router);
};
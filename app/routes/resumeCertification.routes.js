module.exports = (app) => {
    const resumeCertification = require("../controllers/resumeCertification.controller.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/", resumeCertification.create);

    // Retrieve all Courses
    router.get("/", resumeCertification.getAll);

    // Retreive a single Course with id
    router.get("/:id", resumeCertification.getById);

    // Update a Course with id
    router.put("/:id", resumeCertification.update);

    // Delete a course with id
    router.delete("/:id", resumeCertification.delete);

    // Delete all Courses
    router.delete("/", resumeCertification.deleteAll);

    //TODO - need to ask about this
    app.use("/course-t6/admin", router);
};
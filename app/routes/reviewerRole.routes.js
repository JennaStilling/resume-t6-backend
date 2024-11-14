module.exports = (app) => {
    const reviwerRole = require("../controllers/reviewerRole.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new reviewer role
    router.post("/", [authenticate], reviwerRole.create);

    // Retrieve all reviewer roles
    router.get("/", [authenticate], reviwerRole.getAll);

    // Retreive a reviewer admin role with id
    router.get("/:id", [authenticate], reviwerRole.getById);

    // Update an reviewer role with id
    router.put("/:id", [authenticate], reviwerRole.update);

    // Delete an reviewer role with id
    router.delete("/:id", [authenticate], reviwerRole.delete);

    // Delete all reviewer roles
    router.delete("/", [authenticate], reviwerRole.deleteAll);

    app.use("/resume-t6/reviewerRole", router);
};
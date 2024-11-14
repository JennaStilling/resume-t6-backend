module.exports = (app) => {
    const adminRole = require("../controllers/adminRole.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create new admin role
    router.post("/", [authenticate], adminRole.create);

    // Retrieve all admin roles
    router.get("/", [authenticate], adminRole.getAll);

    // Retreive a single admin role with id
    router.get("/:id", [authenticate], adminRole.getById);

    // Update an admin role with id
    router.put("/:id", [authenticate], adminRole.update);

    // Delete an admin role with id
    router.delete("/:id", [authenticate], adminRole.delete);

    // Delete all admin roles
    router.delete("/", [authenticate], adminRole.deleteAll);

    app.use("/resume-t6/adminRole", router);
};
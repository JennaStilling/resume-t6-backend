module.exports = (app) => {
    const user = require("../controllers/user.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Non student users REST requests
    // Create a new User
    router.post("/user/", [authenticate], user.create);
  
    // Retrieve all People
    router.get("/user/", [authenticate], user.getAll);
  
    // Retrieve a single User with id
    router.get("/user/:id", [authenticate], user.getById);

    // router.get("/:email", [authenticate], user.getByEmail);
  
    // Update a User with id
    router.put("/user/:id", [authenticate], user.update);
  
    // Delete a User with id
    router.delete("/user/:id", [authenticate], user.delete);
  
    // Delete all User
    router.delete("/user/", [authenticate], user.deleteAll);

    // Student User REST request
    // Create student user
    router.post("/student/:studentId/user", [authenticate], user.create);

    // Get student user, undecided between the two. Student and User have a one-to-one relationship, so both provide the same result
    router.get("/student/:studentId/user/:id", [authenticate], user.getById);
    router.get("/student/:studentId/user", [authenticate], user.getAll);

    // Update student user 
    router.put("/student/:studentId/user/:id", [authenticate], user.update);

    // delete the student user
    router.delete("/student/:studentId/user/:id", [authenticate], user.delete);
    

    // Reviewer User REST request
    // Create reviewer user
    router.post("/reviewerRole/:reviewerId/user", [authenticate], user.create);

    router.get("/reviewerRole/:reviewerId/user/:id", [authenticate], user.getById);
    router.get("/reviewerRole/:reviewerId/user", [authenticate], user.getAll);

    // Update reviewer user 
    router.put("/reviewerRole/:reviewerId/user/:id", [authenticate], user.update);

    // delete the reviewer user
    router.delete("/reviewerRole/:reviewerId/user/:id", [authenticate], user.delete);
    
    app.use("/resume-t6", router);
  };
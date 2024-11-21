const db = require("../models");
const authconfig = require("../config/auth.config");
const User = db.user;
const Student = db.student;
const Reviewer = db.reviewerRole;
const Admin = db.adminRole;
const Role = db.role;
const UserRole = db.userRole;
const Session = db.session;
const Op = db.Sequelize.Op;

const { google } = require("googleapis");

var jwt = require("jsonwebtoken");

let googleUser = {};

const google_id = process.env.CLIENT_ID;

exports.login = async (req, res) => {
  console.log(req.body);

  var googleToken = req.body.credential;

  const { OAuth2Client } = require("google-auth-library");
  const client = new OAuth2Client(google_id);
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: googleToken,
      audience: google_id,
    });
    googleUser = ticket.getPayload();
    console.log("Google payload is " + JSON.stringify(googleUser));
  }
  await verify().catch(console.error);

  let email = googleUser.email;
  let firstName = googleUser.given_name;
  let lastName = googleUser.family_name;

  // if we don't have their email or name, we need to make another request
  // this is solely for testing purposes
  if (
    (email === undefined ||
      firstName === undefined ||
      lastName === undefined) &&
    req.body.accessToken !== undefined
  ) {
    let oauth2Client = new OAuth2Client(google_id); // create new auth client
    oauth2Client.setCredentials({ access_token: req.body.accessToken }); // use the new auth client with the access_token
    let oauth2 = google.oauth2({
      auth: oauth2Client,
      version: "v2",
    });
    let { data } = await oauth2.userinfo.get(); // get user info
    console.log(data);
    email = data.email;
    firstName = data.given_name;
    lastName = data.family_name;
  }

  console.log(lastName);

  let user = {};
  let session = {};

  await User.findOne({
    where: {
      email: email,
    },
  })
    .then((data) => {
      if (data != null) {
        user = data.dataValues;
      } else {
        // create a new User and save to database
        user = {
          fName: firstName,
          lName: lastName,
          email: email,
        };
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });

  // !!!!!!!!!!!!!! NOTE: If the user information is already in the database, then it might not work, make sure to delete the user if you have already logged into the website

  // this lets us get the user id
  if (user.id === undefined) {
    let userRole = {};
    let student = {};
    let admin = {};
    let reviewer = {};
    let role = {};

    // Splices the email to only get the domain
    let emailDomain = user.email.slice(
      user.email.indexOf("@"),
      user.email.length
    );

    /* area for each individual specific email address for testing -- make sure to delete all student ones (Arrian, Abby, Anthony, Bill, Jenna) for actual production if deployed
      seperate areas are redundant, but allows for specific testing on individual users
    */

    if (user.email === "charlotte.hamil@oc.edu") {
      // Create role for admin
      await Admin.create(admin)
        .then((data) => {
          console.log("admin was registered");
          admin = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      role = {
        role_type: "admin",
      }; // change this to reviewer
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      await Reviewer.create(reviewer)
        .then((data) => {
          console.log("reviewer was registered");
          reviewer = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role for reviewer
      role = {
        role_type: "reviewer",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role for student
      await Student.create(student)
        .then((data) => {
          console.log("student was registered");
          student = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      role = {
        role_type: "student",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // add to user the appropiate id(s)
      user = {
        fName: firstName,
        lName: lastName,
        email: email,
        studentId: student.id,
        reviewerId: reviewer.id,
        adminId: admin.id,
      };
    }

    if (user.email === "anthony.pham@eagles.oc.edu") {
      // Create role for admin
      await Admin.create(admin)
        .then((data) => {
          console.log("admin was registered");
          admin = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      role = {
        role_type: "admin",
      }; // change this to reviewer
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      await Reviewer.create(reviewer)
        .then((data) => {
          console.log("reviewer was registered");
          reviewer = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role for reviewer
      role = {
        role_type: "reviewer",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role for student
      await Student.create(student)
        .then((data) => {
          console.log("student was registered");
          student = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      role = {
        role_type: "student",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // add to user the appropiate id(s)
      user = {
        fName: firstName,
        lName: lastName,
        email: email,
        studentId: student.id,
        reviewerId: reviewer.id,
        adminId: admin.id,
      };
    }

    if (user.email === "abby.crockett@eagles.oc.edu") {
      // Create role for admin
      await Admin.create(admin)
        .then((data) => {
          console.log("admin was registered");
          admin = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      role = {
        role_type: "admin",
      }; // change this to reviewer
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      await Reviewer.create(reviewer)
        .then((data) => {
          console.log("reviewer was registered");
          reviewer = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role for reviewer
      role = {
        role_type: "reviewer",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role for student
      await Student.create(student)
        .then((data) => {
          console.log("student was registered");
          student = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      role = {
        role_type: "student",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // add to user the appropiate id(s)
      user = {
        fName: firstName,
        lName: lastName,
        email: email,
        studentId: student.id,
        reviewerId: reviewer.id,
        adminId: admin.id,
      };
    }

    if (user.email === "bill.le@eagles.oc.edu") {
      // Create role for admin
      await Admin.create(admin)
        .then((data) => {
          console.log("admin was registered");
          admin = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      role = {
        role_type: "admin",
      }; // change this to reviewer
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      await Reviewer.create(reviewer)
        .then((data) => {
          console.log("reviewer was registered");
          reviewer = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role for reviewer
      role = {
        role_type: "reviewer",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role for student
      await Student.create(student)
        .then((data) => {
          console.log("student was registered");
          student = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      role = {
        role_type: "student",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // add to user the appropiate id(s)
      user = {
        fName: firstName,
        lName: lastName,
        email: email,
        studentId: student.id,
        reviewerId: reviewer.id,
        adminId: admin.id,
      };
    }

    if (user.email === "arriannaomi.a.taton@eagles.oc.edu") {
      // Create role for admin
      await Admin.create(admin)
        .then((data) => {
          console.log("admin was registered");
          admin = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      role = {
        role_type: "admin",
      }; // change this to reviewer
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      await Reviewer.create(reviewer)
        .then((data) => {
          console.log("reviewer was registered");
          reviewer = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role for reviewer
      role = {
        role_type: "reviewer",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role for student
      await Student.create(student)
        .then((data) => {
          console.log("student was registered");
          student = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      role = {
        role_type: "student",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // add to user the appropiate id(s)
      user = {
        fName: firstName,
        lName: lastName,
        email: email,
        studentId: student.id,
        reviewerId: reviewer.id,
        adminId: admin.id,
      };
    }

    if (user.email === "j.stilling@eagles.oc.edu") {
      // Create role for admin
      await Admin.create(admin)
        .then((data) => {
          console.log("admin was registered");
          admin = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      role = {
        role_type: "admin",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role for reviewer
      await Reviewer.create(reviewer)
        .then((data) => {
          console.log("reviewer was registered");
          reviewer = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      role = {
        role_type: "reviewer",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role for student
      await Student.create(student)
        .then((data) => {
          console.log("student was registered");
          student = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      role = {
        role_type: "student",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // add to user the appropiate id(s)
      user = {
        fName: firstName,
        lName: lastName,
        email: email,
        studentId: student.id,
        reviewerId: reviewer.id,
        adminId: admin.id,
      };
    }
    


    // if the above if statements are commented out, then remove the else below
    else if (emailDomain === "@eagles.oc.edu") {
      // Create student
      await Student.create(student)
        .then((data) => {
          console.log("student was registered");
          student = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role with student as role
      role = {
        role_type: "student",
      };
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // add to user the student Id
      user = {
        fName: firstName,
        lName: lastName,
        email: email,
        studentId: student.id,
      };
    } 
    
    else if (emailDomain === "@oc.edu") {
      // Create reviewer
      await Reviewer.create(reviewer)
        .then((data) => {
          console.log("reviewer was registered");
          reviewer = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // Create role for admin/teacher - this will be the reviwerer role by default
      role = {
        role_type: "reviewer",
      }; // change this to reviewer
      await Role.create(role)
        .then((data) => {
          console.log("role was registered");
          role = data.dataValues;
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });

      // add to user the reviewer Id
      user = {
        fName: firstName,
        lName: lastName,
        email: email,
        reviewerId: reviewer.id,
      };
    } else {

    /* admin specific code
await Admin.create(admin)
      .then((data) => {
        console.log("admin was registered");
        admin = data.dataValues;
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });

      // Create role for admin/teacher - this will be the reviwerer role by default
      role = {
        role_type: 'admin',
      } // change this to reviewer
      await Role.create(role)
      .then((data) => {
        console.log("role was registered");
        role = data.dataValues;
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });

      // add to user the reviewer Id
      user = {
        fName: firstName,
        lName: lastName,
        email: email,
        reviewerId: reviewer.id,
        adminId: admin.id
      };
      */
      // Will need to add an error that is passed to the frontend when they use an unvalid email
      console.log("The Email you used is not permitted on this website");
    }

    console.log("need to get user's id");
    console.log(user);
    // Create the user
    await User.create(user)
      .then((data) => {
        console.log("user was registered");
        user = data.dataValues;
        // res.send({ message: "User was registered successfully!" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });

    // Assign userRole down here
    userRole = {
      userId: user.id,
      roleId: role.id,
    };

    await UserRole.create(userRole)
      .then((data) => {
        console.log("userRole was registered");
        userRole = data.dataValues;
        // res.send({ message: "User was registered successfully!" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  } else {
    console.log(user);
    // doing this to ensure that the user's name is the one listed with Google
    user.fName = firstName;
    user.lName = lastName;
    console.log(user);
    await User.update(user, { where: { id: user.id } })
      .then((num) => {
        if (num == 1) {
          console.log("updated user's name");
        } else {
          console.log(
            `Cannot update User with id=${user.id}. Maybe User was not found or req.body is empty!`
          );
        }
      })
      .catch((err) => {
        console.log("Error updating User with id=" + user.id + " " + err);
      });
  }

  // try to find session first

  await Session.findOne({
    where: {
      email: email,
      token: { [Op.ne]: "" },
    },
  })
    .then(async (data) => {
      if (data !== null) {
        session = data.dataValues;
        if (session.expirationDate < Date.now()) {
          session.token = "";
          // clear session's token if it's expired
          await Session.update(session, { where: { id: session.id } })
            .then((num) => {
              if (num == 1) {
                console.log("successfully logged out");
              } else {
                console.log("failed");
                res.send({
                  message: `Error logging out user.`,
                });
              }
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send({
                message: "Error logging out user.",
              });
            });
          //reset session to be null since we need to make another one
          session = {};
        } else {
          // if the session is still valid, then send info to the front end
          let userInfo = {
            email: user.email,
            fName: user.fName,
            lName: user.lName,
            userId: user.id,
            token: session.token,
            // refresh_token: user.refresh_token,
            // expiration_date: user.expiration_date
          };
          console.log("found a session, don't need to make another one");
          console.log(userInfo);
          res.send(userInfo);
        }
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sessions.",
      });
    });

  if (session.id === undefined) {
    // create a new Session with an expiration date and save to database
    let token = jwt.sign({ id: email }, authconfig.secret, {
      expiresIn: 86400,
    });
    let tempExpirationDate = new Date();
    tempExpirationDate.setDate(tempExpirationDate.getDate() + 1);
    const session = {
      token: token,
      email: email,
      userId: user.id,
      expirationDate: tempExpirationDate,
    };

    console.log("making a new session");
    console.log(session);

    await Session.create(session)
      .then(() => {
        let userInfo = {
          email: user.email,
          fName: user.fName,
          lName: user.lName,
          userId: user.id,
          token: token,
          // refresh_token: user.refresh_token,
          // expiration_date: user.expiration_date
        };
        console.log(userInfo);
        res.send(userInfo);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

exports.authorize = async (req, res) => {
  console.log("authorize client");
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "postmessage"
  );

  console.log("authorize token");
  // Get access and refresh tokens (if access_type is offline)
  let { tokens } = await oauth2Client.getToken(req.body.code);
  oauth2Client.setCredentials(tokens);

  let user = {};
  console.log("findUser");

  await User.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (data != null) {
        user = data.dataValues;
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
      return;
    });
  console.log("user");
  console.log(user);
  user.refresh_token = tokens.refresh_token;
  let tempExpirationDate = new Date();
  tempExpirationDate.setDate(tempExpirationDate.getDate() + 100);
  user.expiration_date = tempExpirationDate;

  await User.update(user, { where: { id: user.id } })
    .then((num) => {
      if (num == 1) {
        console.log("updated user's google token stuff");
      } else {
        console.log(
          `Cannot update User with id=${user.id}. Maybe User was not found or req.body is empty!`
        );
      }
      let userInfo = {
        refresh_token: user.refresh_token,
        expiration_date: user.expiration_date,
      };
      console.log(userInfo);
      res.send(userInfo);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });

  console.log(tokens);
  console.log(oauth2Client);
};

exports.logout = async (req, res) => {
  console.log(req.body);
  if (req.body === null) {
    res.send({
      message: "User has already been successfully logged out!",
    });
    return;
  }

  // invalidate session -- delete token out of session table
  let session = {};

  await Session.findAll({ where: { token: req.body.token } })
    .then((data) => {
      if (data[0] !== undefined) session = data[0].dataValues;
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sessions.",
      });
      return;
    });

  session.token = "";

  // session won't be null but the id will if no session was found
  if (session.id !== undefined) {
    Session.update(session, { where: { id: session.id } })
      .then((num) => {
        if (num == 1) {
          console.log("successfully logged out");
          res.send({
            message: "User has been successfully logged out!",
          });
        } else {
          console.log("failed");
          res.send({
            message: `Error logging out user.`,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Error logging out user.",
        });
      });
  } else {
    console.log("already logged out");
    res.send({
      message: "User has already been successfully logged out!",
    });
  }
};

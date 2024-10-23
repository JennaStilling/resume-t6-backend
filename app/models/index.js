const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.admin = require("./admin.model.js")(sequelize, Sequelize);
db.student = require("./student.model.js")(sequelize, Sequelize);
db.link = require("./link.model.js")(sequelize, Sequelize);
db.education = require("./education.model.js")(sequelize, Sequelize);
db.course = require("./course.model.js")(sequelize, Sequelize);
db.experience = require("./experience.model.js")(sequelize, Sequelize);
db.project = require("./project.model.js")(sequelize, Sequelize);
db.skill = require("./skill.model.js")(sequelize, Sequelize);
db.certification = require("./certification.model.js")(sequelize, Sequelize);
db.interest = require("./interest.model.js")(sequelize, Sequelize);


// Foreign keys
// Admin to User
db.admin.hasOne(db.user, {
  as: "user",
  foreignKey: "adminId",
  onDelete: "SET NULL"
});
db.user.belongsTo(db.admin, {
  as: "admin",
  foreignKey: "adminId",
  onDelete: "CASCADE"
});

// User to Student
db.student.hasOne(db.user, {
  as: "user",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});
db.user.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});

// Link to Student
db.student.hasMany(db.link, {
  as: "link",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.link.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Education to Student
db.student.hasMany(db.education, {
  as: "education",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.education.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Course to Education
db.education.hasMany(db.course, {
  as: "course",
  foreignKey: "educationId",
  onDelete: "CASCADE"
});
db.course.belongsTo(db.education, {
  as: "education",
  foreignKey: "educationId",
  onDelete: "SET NULL"
});

// Experience to Student
db.student.hasMany(db.experience, {
  as: "experience",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.experience.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Project to Student
db.student.hasMany(db.project, {
  as: "project",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.project.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Skill to Student
db.student.hasMany(db.skill, {
  as: "skill",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.skill.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Certification to Student
db.student.hasMany(db.certification, {
  as: "certification",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.certification.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Interest to Student
db.student.hasMany(db.interest, {
  as: "interest",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.interest.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});



db.sequelize.sync({ alter: true });

module.exports = db;
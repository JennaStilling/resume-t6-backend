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

db.session = require("./session.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.userRole = require("./userRole.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.userResumeReview = require("./userResumeReview.model.js")(sequelize, Sequelize);
db.student = require("./student.model.js")(sequelize, Sequelize);
db.link = require("./link.model.js")(sequelize, Sequelize);
db.education = require("./education.model.js")(sequelize, Sequelize);
db.course = require("./course.model.js")(sequelize, Sequelize);
db.experience = require("./experience.model.js")(sequelize, Sequelize);
db.project = require("./project.model.js")(sequelize, Sequelize);
db.skill = require("./skill.model.js")(sequelize, Sequelize);
db.certification = require("./certification.model.js")(sequelize, Sequelize);
db.interest = require("./interest.model.js")(sequelize, Sequelize);
db.resumeReview = require("./resumeReview.model.js")(sequelize, Sequelize);
db.resume = require("./resume.model.js")(sequelize, Sequelize);
db.resumeLink = require("./resumeLink.model.js")(sequelize, Sequelize);
db.resumeEducation = require("./resumeEducation.model.js")(sequelize, Sequelize);
db.resumeExperience = require("./resumeExperience.model.js")(sequelize, Sequelize);
db.resumeProject = require("./resumeProject.model.js")(sequelize, Sequelize);
db.resumeSkill = require("./resumeSkill.model.js")(sequelize, Sequelize);
db.resumeCertification = require("./resumeCertification.model.js")(sequelize, Sequelize);
db.resumeInterest = require("./resumeInterest.model.js")(sequelize, Sequelize);
db.reviewerRole = require("./reviewerRole.model.js")(sequelize, Sequelize);
db.adminRole = require("./adminRole.model.js")(sequelize, Sequelize);

// Role hasMany UserRole
db.role.hasMany(db.userRole, {
  as: "userRole",
  foreignKey: "roleId",
  onDelete: "CASCADE"
});
db.userRole.belongsTo(db.role, {
  as: "role",
  foreignKey: "roleId",
  onDelete: "SET NULL"
});

// User hasMany UserRole
db.user.hasMany(db.userRole, {
  as: "userRole",
  foreignKey: "userId",
  onDelete: "CASCADE"
});
db.userRole.belongsTo(db.user, {
  as: "user",
  foreignKey: "userId",
  onDelete: "SET NULL"
});

//User to UserResumeReview 
db.user.hasMany(db.userResumeReview, {
  as: "userResumeReview",
  foreignKey: "userId",
  onDelete: "CASCADE"
});
db.userResumeReview.belongsTo(db.user, {
  as: "user",
  foreignKey: "userId",
  onDelete: "SET NULL"
});

//ResumeReview to UserResumeReview
db.resumeReview.hasMany(db.userResumeReview, {
  as: "userResumeReview",
  foreignKey: "resumeReviewId",
  onDelete: "CASCADE"
});
db.userResumeReview.belongsTo(db.resumeReview, {
  as: "resumeReview",
  foreignKey: "resumeReviewId",
  onDelete: "SET NULL"
});

//Student to ResumeReview
db.student.hasMany(db.resumeReview, {
  as: "resumeReview",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.resumeReview.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

//Student to Resume
db.student.hasMany(db.resume, {
  as: "resume",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.resume.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

//ResumeReview to Resume(?)
db.resumeReview.hasOne(db.resume, {
  as: "resume",
  foreignKey: "resumeReviewId",
  onDelete: "CASCADE"
});
db.resume.belongsTo(db.resumeReview, {
  as: "resumeReview",
  foreignKey: "resumeReviewId",
  onDelete: "SET NULL"
});

//Resume to ResumeLink
db.resume.hasMany(db.resumeLink, {
  as: "resumeLink",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeLink.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Resume to ResumeEducation
db.resume.hasMany(db.resumeEducation, {
  as: "resumeEducation",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeEducation.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Resume to ResumeExperience
db.resume.hasMany(db.resumeExperience, {
  as: "resumeExperience",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeExperience.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Resume to ResumeProject
db.resume.hasMany(db.resumeProject, {
  as: "resumeProject",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeProject.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Resume to ResumeSkill
db.resume.hasMany(db.resumeSkill, {
  as: "resumeSkill",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeSkill.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Resume to ResumeCertification
db.resume.hasMany(db.resumeCertification, {
  as: "resumeCertification",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeCertification.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Resume to ResumeInterest
db.resume.hasMany(db.resumeInterest, {
  as: "resumeInterest",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeInterest.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Link to ResumeLink
db.link.hasMany(db.resumeLink, {
  as: "resumeLink",
  foreignKey: "linkId",
  onDelete: "CASCADE"
});
db.resumeLink.belongsTo(db.link, {
  as: "link",
  foreignKey: "linkId",
  onDelete: "SET NULL"
});

//Education to ResumeEducation
db.education.hasMany(db.resumeEducation, {
  as: "resumeEducation",
  foreignKey: "educationId",
  onDelete: "CASCADE"
});
db.resumeEducation.belongsTo(db.education, {
  as: "education",
  foreignKey: "educationId",
  onDelete: "SET NULL"
});

//Experience to ResumeExperience
db.experience.hasMany(db.resumeExperience, {
  as: "resumeExperience",
  foreignKey: "experienceId",
  onDelete: "CASCADE"
});
db.resumeExperience.belongsTo(db.experience, {
  as: "experience",
  foreignKey: "experienceId",
  onDelete: "SET NULL"
});

//Project to ResumeProject
db.project.hasMany(db.resumeProject, {
  as: "resumeProject",
  foreignKey: "projectId",
  onDelete: "CASCADE"
});
db.resumeProject.belongsTo(db.project, {
  as: "project",
  foreignKey: "projectId",
  onDelete: "SET NULL"
});

//Skill to ResumeSkill
db.skill.hasMany(db.resumeSkill, {
  as: "resumeSkill",
  foreignKey: "skillId",
  onDelete: "CASCADE"
});
db.resumeSkill.belongsTo(db.skill, {
  as: "skill",
  foreignKey: "skillId",
  onDelete: "SET NULL"
});

//Certification to ResumeCertification
db.certification.hasMany(db.resumeCertification, {
  as: "resumeCertification",
  foreignKey: "certificationId",
  onDelete: "CASCADE"
});
db.resumeCertification.belongsTo(db.certification, {
  as: "certification",
  foreignKey: "certificationId",
  onDelete: "SET NULL"
});

//Interest to ResumeInterest
db.interest.hasMany(db.resumeInterest, {
  as: "resumeInterest",
  foreignKey: "interestId",
  onDelete: "CASCADE"
});
db.resumeInterest.belongsTo(db.interest, {
  as: "interest",
  foreignKey: "interestId",
  onDelete: "SET NULL"
});

// Foreign keys
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

// Course to Student
db.student.hasMany(db.course, {
  as: "course",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.course.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
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

// Foreign keys
db.reviewerRole.hasOne(db.user, {
  as: "user",
  foreignKey: "reviewerId",
  onDelete: "SET NULL"
});
db.user.belongsTo(db.reviewerRole, {
  as: "reviewerRole",
  foreignKey: "reviewerId",
  onDelete: "CASCADE"
}); 

db.adminRole.hasOne(db.user, {
  as: "user",
  foreignKey: "adminId",
  onDelete: "SET NULL"
});
db.user.belongsTo(db.adminRole, {
  as: "adminRole",
  foreignKey: "adminId",
  onDelete: "CASCADE"
});

db.sequelize.sync({ alter: true });

module.exports = db;
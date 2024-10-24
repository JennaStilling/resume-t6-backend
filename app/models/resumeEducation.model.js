module.exports = (sequelize, Sequelize) => {
    const ResumeEducation = sequelize.define("resumeEducation", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return ResumeEducation;
};
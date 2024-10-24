module.exports = (sequelize, Sequelize) => {
    const ResumeProject = sequelize.define("resumeProject", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return ResumeProject;
};
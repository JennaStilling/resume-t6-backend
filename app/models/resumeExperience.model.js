module.exports = (sequelize, Sequelize) => {
    const ResumeExperience = sequelize.define("resumeExperience", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return ResumeExperience;
};
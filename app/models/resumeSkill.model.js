module.exports = (sequelize, Sequelize) => {
    const ResumeSkill = sequelize.define("resumeSkill", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return ResumeSkill;
};
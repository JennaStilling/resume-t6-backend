module.exports = (sequelize, Sequelize) => {
    const ResumeInterest = sequelize.define("resumeInterest", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return ResumeInterest;
};
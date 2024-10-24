module.exports = (sequelize, Sequelize) => {
    const ResumeLink = sequelize.define("resumeLink", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return ResumeLink;
};
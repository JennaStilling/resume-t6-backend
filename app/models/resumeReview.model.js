//attributes that ARE NOT foreign keys
module.exports = (sequelize, Sequelize) => {
    const ResumeReview = sequelize.define("resumeReview", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        suggestion: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        notes: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    return ResumeReview;
};

//attributes that ARE NOT foreign keys
module.exports = (sequelize, Sequelize) => {
    const ResumeReview = sequelize.define("resumeReview", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        suggesstion: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
    return ResumeReview;
};
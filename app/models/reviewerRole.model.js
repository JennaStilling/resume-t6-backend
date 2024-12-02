module.exports = (sequelize, Sequelize) => {
    const ReviewerRole = sequelize.define("reviewerRole", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return ReviewerRole;
};
module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        grade: {
            type: Sequelize.ENUM('A', 'B', 'C', 'D', 'F', 'P*'),
            allowNull: true,
        },
    });
    return Course;
};
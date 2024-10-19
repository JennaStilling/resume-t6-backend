module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        phone_number: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
    return Student;
};
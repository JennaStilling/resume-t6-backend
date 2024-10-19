module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
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
    return Admin;
};
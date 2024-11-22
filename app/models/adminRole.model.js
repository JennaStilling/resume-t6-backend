module.exports = (sequelize, Sequelize) => {
    const AdminRole = sequelize.define("adminRole", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return AdminRole;
};
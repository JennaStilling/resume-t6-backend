module.exports = (sequelize, Sequelize) => {
    const Link = sequelize.define("link", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
    return Link;
};
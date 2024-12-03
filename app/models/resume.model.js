module.exports = (sequelize, Sequelize) => {
    const Resume = sequelize.define("resume", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        template_type: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        image: {
            type: Sequelize.TEXT('long'),
            allowNull: true,
        },
    });
    return Resume;
};
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
        contact_info: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        template_type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
    return Resume;
};
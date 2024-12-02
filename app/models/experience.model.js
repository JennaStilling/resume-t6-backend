module.exports = (sequelize, Sequelize) => {
    const Experience = sequelize.define("experience", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        company: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        start_date: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        end_date: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        job_description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    });
    return Experience;
};
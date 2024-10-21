module.exports = (sequelize, Sequelize) => {
    const Certification = sequelize.define("certification", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        company: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        date_acquired: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
    return Certification;
};
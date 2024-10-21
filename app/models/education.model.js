module.exports = (sequelize, Sequelize) => {
    const Education = sequelize.define("education", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        degree: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        institution: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        gpa: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        graduation_date: {
            type: Sequelize.STRING, // Might consider changing this in the future
            allowNull: false,
        },
    });
    return Education;
};
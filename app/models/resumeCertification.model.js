module.exports = (sequelize, Sequelize) => {
    const ResumeCertification = sequelize.define("resumeCertification", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return ResumeCertification;
};
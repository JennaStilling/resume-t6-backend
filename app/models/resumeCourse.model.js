module.exports = (sequelize, Sequelize) => {
    const ResumeCourse = sequelize.define("resumeCourse", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return ResumeCourse;
};
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          fName: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          lName: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          is_admin: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
          },
          is_student: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
          },
    });
    return User;
  };
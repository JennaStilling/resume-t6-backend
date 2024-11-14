module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      role_type: {
        type: Sequelize.ENUM('admin', 'student', 'reviewer'),
        allowNull: false,
        defaultValue: 'student',
      },
    });
  
    return Role;
  };
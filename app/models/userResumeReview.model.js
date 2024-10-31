module.exports = (sequelize, Sequelize) => {
    const UserResumeReview = sequelize.define("userResumeReview", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    });
  
    return UserResumeReview;
  };
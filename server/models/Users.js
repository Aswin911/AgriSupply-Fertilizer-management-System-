module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
      username: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
      },
  });

  return Users; // Removed the `associate` function since there's no Likes table
};

module.exports = (sequelize, DataTypes) => {
  const Farmers = sequelize.define("Farmers", {
      Farmer_ID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      Name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      Contact_Number: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      Address: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      Land_Size: {
          type: DataTypes.FLOAT,
          allowNull: false,
      },
      Crop_Type: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      Email: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true,
      },
  }, { timestamps: false });

  Farmers.associate = (models) => {
      Farmers.hasMany(models.Orders, { foreignKey: "Farmer_ID", onDelete: "CASCADE" });
      Farmers.hasMany(models.Feedback, { foreignKey: "Farmer_ID", onDelete: "CASCADE" });
  };

  return Farmers;
};

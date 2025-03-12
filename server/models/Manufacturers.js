module.exports = (sequelize, DataTypes) => {
  const Manufacturers = sequelize.define("Manufacturers", {
      Manufacturer_ID: {
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
      Email: {
          type: DataTypes.STRING,
          allowNull: false,
      },
  }, { timestamps: false });

  Manufacturers.associate = (models) => {
      Manufacturers.hasMany(models.Fertilizers, { foreignKey: "Manufacturer_ID" });
  };

  return Manufacturers;
};

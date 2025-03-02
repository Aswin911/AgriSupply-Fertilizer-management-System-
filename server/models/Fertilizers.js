module.exports = (sequelize, DataTypes) => {
    const Fertilizers = sequelize.define("Fertilizers", {
      Fertilizer_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Fertilizer_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      NPK_Composition: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Price_per_Unit: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      Stock_Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Manufacturer_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    Fertilizers.associate = (models) => {
      Fertilizers.belongsTo(models.Manufacturers, { foreignKey: "Manufacturer_ID" });
      Fertilizers.hasMany(models.Purchases, { foreignKey: "Fertilizer_ID" });
      Fertilizers.hasMany(models.Orders, { foreignKey: "Fertilizer_ID" });
      Fertilizers.hasMany(models.Feedback, { foreignKey: "Fertilizer_ID" });
      Fertilizers.hasOne(models.Inventory, { foreignKey: "Fertilizer_ID" });
    };
  
    return Fertilizers;
  };
  
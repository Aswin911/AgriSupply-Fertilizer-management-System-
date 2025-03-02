module.exports = (sequelize, DataTypes) => {
    const Inventory = sequelize.define("Inventory", {
      Fertilizer_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      Stock_Available: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Last_Updated_Date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  
    Inventory.associate = (models) => {
      Inventory.belongsTo(models.Fertilizers, { foreignKey: "Fertilizer_ID" });
    };
  
    return Inventory;
  };
  
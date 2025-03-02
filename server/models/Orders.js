module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define("Orders", {
      Order_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Farmer_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Fertilizer_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Order_Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Order_Status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Order_Date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Delivery_Date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
  
    Orders.associate = (models) => {
      Orders.belongsTo(models.Farmers, { foreignKey: "Farmer_ID" });
      Orders.belongsTo(models.Fertilizers, { foreignKey: "Fertilizer_ID" });
    };
  
    return Orders;
  };
  
// filepath: d:\web dev\AgriSupply\server\models\Purchases.js
module.exports = (sequelize, DataTypes) => {
    const Purchases = sequelize.define("Purchases", {
        Purchase_ID: {
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
        Quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Purchase_Date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Total_Amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, { timestamps: false });
  
    Purchases.associate = (models) => {
        Purchases.belongsTo(models.Farmers, { foreignKey: "Farmer_ID" });
        Purchases.belongsTo(models.Fertilizers, { foreignKey: "Fertilizer_ID" });
    };
  
    return Purchases;
  };
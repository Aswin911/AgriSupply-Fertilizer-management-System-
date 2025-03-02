module.exports = (sequelize, DataTypes) => {
    const Payments = sequelize.define("Payments", {
      Payment_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Purchase_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Payment_Mode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Payment_Status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Payment_Date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Amount_Paid: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  
    Payments.associate = (models) => {
      Payments.belongsTo(models.Purchases, { foreignKey: "Purchase_ID" });
    };
  
    return Payments;
  };
  
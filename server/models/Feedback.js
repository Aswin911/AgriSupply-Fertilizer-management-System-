module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define("Feedback", {
      Feedback_ID: {
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
      Feedback_Text: {
          type: DataTypes.TEXT,
          allowNull: false,
      },
      Rating: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: { min: 1, max: 5 },
      },
  }, { timestamps: false });

  Feedback.associate = (models) => {
      Feedback.belongsTo(models.Farmers, { foreignKey: "Farmer_ID" });
      Feedback.belongsTo(models.Fertilizers, { foreignKey: "Fertilizer_ID" });
  };

  return Feedback;
};

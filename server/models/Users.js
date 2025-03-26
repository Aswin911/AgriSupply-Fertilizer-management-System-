module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING(255),
            allowNull: true,
            defaultValue: "Farmer"
        },
        security_question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    }, { timestamps: false });

    return Users;
};

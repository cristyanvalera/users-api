const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const User = sequelize.define('user', {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    birthday: { type: DataTypes.STRING },
}, { underscored: true });

module.exports = { User };
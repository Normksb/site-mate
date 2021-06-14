const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weeks extends Model {}

Weeks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Weeks',
  }
);

module.exports = Weeks;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class EmployeeSchedule extends Model {}

EmployeeSchedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    schedule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'EmployeeSchedule',
  }
);

module.exports = EmployeeSchedule;
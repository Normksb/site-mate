const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Schedule extends Model {}

Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    week_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    employee_schedule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Schedule',
  }
);

module.exports = Schedule;
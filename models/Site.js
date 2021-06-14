const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Site extends Model {}

Site.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    site_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'site',
  }
);

module.exports = Site;
